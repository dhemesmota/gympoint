import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import { Button } from './styles';

export default function Logout() {
  const dispatch = useDispatch();

  function logout() {
    dispatch(signOut());
  }

  return (
    <>
      <Button onPress={logout}>
        <Icon name="power-settings-new" size={24} color="#999" />
      </Button>
    </>
  );
}
