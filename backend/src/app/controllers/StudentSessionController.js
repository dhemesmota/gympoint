import Student from '../models/Student';

class StudentSessionController {
  async index(req, res) {
    const { studentId } = req.params;

    const student = await Student.findByPk(studentId);

    if (!student) {
      return res.status(400).json({ erros: 'Student does not exists.' });
    }

    return res.json(student);
  }
}

export default new StudentSessionController();
