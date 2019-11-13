export function editStudentRequest(student) {
  return {
    type: '@student/EDIT_STUDENT',
    payload: { student },
  };
}

export function editStudentSuccess() {
  return {
    type: '@student/EDIT_STUDENT_SUCCESS',
  };
}
