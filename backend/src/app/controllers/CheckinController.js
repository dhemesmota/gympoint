import { addDays, subDays } from 'date-fns';
import { Op } from 'sequelize';
import Checkin from '../models/Checkin';
import Student from '../models/Student';

class CheckinController {
  async index(req, res) {
    const { studentId } = req.params;
    const { page = 1 } = req.query;

    const limit = 20;

    const checkins = await Checkin.findAll({
      where: { student_id: studentId },
      order: [['created_at', 'desc']],
      limit,
      offset: (page - 1) * limit,
    });

    return res.json(checkins);
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
      return res.status(400).json({ erros: 'Checkins limit reached.' });
    }

    const student = await Student.findByPk(studentId);

    if (!student) {
      return res.status(400).json({ erros: 'Student does not exists.' });
    }

    const checkin = await Checkin.create({ student_id: studentId });

    return res.json(checkin);
  }
}

export default new CheckinController();
