import { takeLatest, all } from 'redux-saga/effects';

import history from '~/services/history';

export function edit({ payload }) {
  const { id } = payload.plan;
  history.push(`/plans/edit/${id}`);
}

export default all([takeLatest('@plan/EDIT_PLAN_REQUEST', edit)]);
