import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo-vertical.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="GymPoint" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input
          label="SEU E-MAIL"
          name="email"
          type="email"
          placeholder="exemplo@mail.com"
        />
        <Input
          label="SUA SENHA"
          name="password"
          type="password"
          placeholder="***********"
        />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
