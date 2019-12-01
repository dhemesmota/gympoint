import { addDays, subDays } from 'date-fns';
import { Op } from 'sequelize';
import Checkin from '../models/Checkin';
import Student from '../models/Student';

class CheckinController {
  async index(req, res) {
    const { studentId } = req.params;
    const { page = 1 } = req.query;

    const limit = 8;

    const checkins = await Checkin.findAndCountAll({
      where: { student_id: studentId },
      order: [['created_at', 'desc']],
      limit,
      offset: (page - 1) * limit,
    });

    return res.json({
      checkins: checkins.rows,
      count: checkins.count,
      page,
      limit,
    });
  }

  async store(req, res) {
    const { studentId } = req.params;

    const start_date = subDays(new Date(), 3);
    const end_date = addDays(new Date(), 3);

    const checkins = await Checkin.count({
      where: {
        student_id: studentId,
        created_at: {
          [Op.between]: [start_date, end_date],
        },
      },
    });

    if (checkins >= 5) {
      return res.status(401).json({ error: 'Checkins limit reached.' });
    }

    const student = await Student.findByPk(studentId);

    if (!student) {
      return res.status(400).json({ error: 'Student does not exists.' });
    }

    const checkin = await Checkin.create({ student_id: studentId });

    return res.json(checkin);
  }
}

export default new CheckinController();
