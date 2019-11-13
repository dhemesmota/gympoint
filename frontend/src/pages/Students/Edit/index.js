import React from 'react';
import { useSelector } from 'react-redux';
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

export default function StudentsEdit({ history, match }) {
  const { id } = match.params;
  const student = useSelector(state => state.student.student);

  if (!student) {
    history.push('/students');
  }

  async function handleSubmit(data) {
    try {
      await api.put(`/students/${id}`, { ...data });

      toast.success('Dados do aluno atualizado');
      history.push('/students');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }
  return (
    <>
      <Form initialData={student} schema={schema} onSubmit={handleSubmit}>
        <Header>
          <h1>Edição de aluno</h1>

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

StudentsEdit.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
