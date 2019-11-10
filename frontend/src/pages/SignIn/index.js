import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo-vertical.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GymPoint" />
      <Form>
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

        <button type="button">Entrar no sistema</button>
      </Form>
    </>
  );
}
