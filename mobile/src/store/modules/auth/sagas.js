import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { userId } = payload;

    const response = yield call(api.get, `students/${userId}/checkins`);
    console.tron.warn(response);

    yield put(signInSuccess(userId));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert('Falha na autenticação', 'verifique seu id de acesso.');
    yield put(signFailure());
  }
}

export function setToken() {}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
