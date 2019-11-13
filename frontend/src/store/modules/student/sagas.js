import { takeLatest, all } from 'redux-saga/effects';

import history from '~/services/history';

export function edit({ payload }) {
  const { id } = payload.student;
  history.push(`/students/edit/${id}`);
}

export default all([takeLatest('@student/EDIT_STUDENT', edit)]);
