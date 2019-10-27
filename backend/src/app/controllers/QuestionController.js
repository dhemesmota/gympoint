import * as Yup from 'yup';
import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

import AnswerMail from '../jobs/AnswerMail';
import Queue from '../../lib/Queue';

class QuestionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      answer: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { orderId } = req.params;

    const helpOrder = await HelpOrder.findByPk(orderId);

    if (!helpOrder) {
      return res.status(400).json({ error: 'Help order does not exists.' });
    }

    const { answer } = req.body;
    const answer_at = new Date();

    await helpOrder.update({
      answer,
      answer_at,
    });

    const student = await Student.findByPk(helpOrder.student_id);

    /**
     * Notify answer
     */
    await Queue.add(AnswerMail.key, {
      student,
      helpOrder,
    });

    return res.json(helpOrder);
  }
}

export default new QuestionController();
