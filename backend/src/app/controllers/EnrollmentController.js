import * as Yup from 'yup';
import { parseISO, addMonths, isBefore } from 'date-fns';

import Enrollment from '../models/Enrollment';
import Plan from '../models/Plan';
import Student from '../models/Student';

import EnrollmentMail from '../jobs/EnrollmentMail';
import Queue from '../../lib/Queue';

class EnrollmentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const limit = 10;

    const enrollments = await Enrollment.findAndCountAll({
      order: [['created_at', 'desc']],
      limit,
      offset: (page - 1) * limit,
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email', 'age', 'weight', 'height'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['id', 'title', 'duration', 'price'],
        },
      ],
    });

    return res.json({
      enrollments: enrollments.rows,
      count: enrollments.count,
      page,
      limit,
    });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { student_id, plan_id, start_date } = req.body;

    if (isBefore(parseISO(start_date), new Date())) {
      return res.status(400).json({ error: 'Start date are not permitted' });
    }

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(400).json({ error: 'Student does not exists.' });
    }

    const plan = await Plan.findByPk(plan_id);

    if (!plan) {
      return res.status(400).json({ error: 'Plan does not exists.' });
    }

    const end_date = addMonths(parseISO(start_date), plan.duration);

    const price = plan.price * plan.duration;

    const enrollment = await Enrollment.create({
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
    });

    /**
     * Notify enrollment
     */
    await Queue.add(EnrollmentMail.key, {
      student,
      plan,
      start_date,
      end_date,
      price,
    });

    return res.json(enrollment);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      plan_id: Yup.number(),
      start_date: Yup.date().when('plan_id', (plan_id, field) =>
        plan_id ? field.required() : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { plan_id, start_date } = req.body;
    const { enrollmentId } = req.params;

    const startDate = parseISO(start_date);

    const enrollment = await Enrollment.findByPk(enrollmentId);

    if (!enrollment) {
      return res.status(400).json({ error: 'Enrollment does not exists.' });
    }

    if (isBefore(startDate, new Date())) {
      return res.status(400).json({ error: 'Start date are not permitted' });
    }

    const planId =
      plan_id && plan_id !== enrollment.plan_id ? plan_id : enrollment.plan_id;

    const plan = await Plan.findByPk(planId);

    if (!plan) {
      return res.status(400).json({ error: 'Plan does not exists.' });
    }

    const end_date = addMonths(startDate, plan.duration);
    const price = plan.price * plan.duration;

    await enrollment.update({
      plan_id: planId,
      start_date: startDate,
      end_date,
      price,
    });

    return res.json(enrollment);
  }

  async delete(req, res) {
    const { enrollmentId } = req.params;

    const enrollment = await Enrollment.findByPk(enrollmentId);

    if (!enrollment) {
      return res.status(400).json({ error: 'Enrollment does not exists.' });
    }

    await enrollment.destroy();

    return res.json();
  }
}

export default new EnrollmentController();
