import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';
import { Background, Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [studentId, setStudentId] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(studentId));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="fingerprint"
            secureTextEntry
            placeholder="Informe seu ID de cadastro"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={studentId}
            onChangeText={setStudentId}
          />

          <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
