/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import InputMask from 'react-input-mask';

import Header from '~/components/ContainerHeader';
import ContainerFormBody from '~/styles/ContainerFormBody';

import api from '~/services/api';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  age: Yup.string().required('A idade é obrigatória'),
  weight: Yup.string().required('O peso é obrigatório'),
  height: Yup.string()
    .min(4, 'Altura inválida.')
    .required('A altura é obrigatória'),
});

export default function StudentsNew({ history }) {
  async function handleSubmit(data) {
    try {
      await api.post('/students', { ...data });

      toast.success('Aluno cadastrado');
      history.push('/students');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }
  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Header title="Cadastro de aluno" buttonBack="/students" buttonSubmit />

        <ContainerFormBody>
          <Input
            label="NOME COMPLETO"
            name="name"
            type="text"
            placeholder="Jhon Doe"
          />
          <Input
            label="ENDEREÇO DE E-MAIL"
            name="email"
            type="text"
            placeholder="exemplo@mail.com"
          />

          <div className="row">
            <div className="input-group">
              <label htmlFor="age">IDADE</label>
              <InputMask mask="99" maskChar="">
                {() => <Input name="age" type="text" placeholder="25" />}
              </InputMask>
            </div>
            <div className="input-group">
              <label htmlFor="weight">PESO (em kg)</label>
              <InputMask mask="99.9" maskChar="">
                {() => <Input name="weight" type="text" placeholder="75.5kg" />}
              </InputMask>
            </div>
            <div className="input-group">
              <label htmlFor="height">ALTURA</label>
              <InputMask mask="9.99" maskChar="">
                {() => <Input name="height" type="text" placeholder="1.78m" />}
              </InputMask>
            </div>
          </div>
        </ContainerFormBody>
      </Form>
    </>
  );
}

StudentsNew.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
