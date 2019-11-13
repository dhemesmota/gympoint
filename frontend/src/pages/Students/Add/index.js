import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Header from '~/components/ContainerHeader';
import ContainerBodyAdd from '~/components/ContainerBodyAdd';

import api from '~/services/api';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  age: Yup.string().required('A idade é obrigatória'),
  weight: Yup.string().required('O peso é obrigatório'),
  height: Yup.string().required('A altura é obrigatória'),
});

export default function StudentsAdd({ history }) {
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
        <Header>
          <h1>Cadastro de aluno</h1>

          <div>
            <Link to="/students">
              <MdKeyboardArrowLeft color="#fff" size={20} />
              VOLTAR
            </Link>
            <button type="submit" className="gymcolor">
              <MdCheck color="#fff" size={20} />
              SALVAR
            </button>
          </div>
        </Header>

        <ContainerBodyAdd>
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
              <Input label="IDADE" name="age" type="number" />
            </div>
            <div className="input-group">
              <Input label="PESO (em kg)" name="weight" type="text" />
            </div>
            <div className="input-group">
              <Input label="ALTURA" name="height" type="text" />
            </div>
          </div>
        </ContainerBodyAdd>
      </Form>
    </>
  );
}

StudentsAdd.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
