import * as Yup from 'yup';
import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

class HelpOrderController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const { studentId } = req.params;

    const limit = 20;

    const student = await Student.findByPk(studentId);

    if (!student) {
      return res.status(400).json({ error: 'Student does not exists.' });
    }

    const HelpOrders = await HelpOrder.findAll({
      where: { student_id: studentId },
      order: [['answer_at', 'desc'], ['created_at', 'desc']],
      limit,
      offset: (page - 1) * limit,
      attributes: ['id', 'question', 'answer', 'answer_at'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    return res.json(HelpOrders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      question: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { studentId } = req.params;

    const student = await Student.findByPk(studentId);

    if (!student) {
      return res.status(400).json({ error: 'Student does not exists.' });
    }

    const { question } = req.body;

    const { id, student_id, answer, answer_at } = await HelpOrder.create({
      student_id: studentId,
      question,
    });

    return res.json({
      id,
      student_id,
      question,
      answer,
      answer_at,
    });
  }
}

export default new HelpOrderController();
