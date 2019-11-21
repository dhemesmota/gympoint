/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';

import Header from '~/components/ContainerHeader';
import ContainerBodyForm from '~/components/ContainerBodyForm';

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

export default function StudentsEdit({ history, match, location }) {
  const { id } = match.params;
  const { student } = location.state;

  console.tron.log(location);

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

        <ContainerBodyForm>
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
              <InputMask
                mask="99"
                maskChar=""
                defaultValue={student && student.age}
              >
                {() => <Input name="age" type="text" placeholder="25" />}
              </InputMask>
            </div>
            <div className="input-group">
              <label htmlFor="weight">PESO (em kg)</label>
              <InputMask
                mask="99.9"
                maskChar=""
                defaultValue={student && student.weight}
              >
                {() => <Input name="weight" type="text" placeholder="75.5kg" />}
              </InputMask>
            </div>
            <div className="input-group">
              <label htmlFor="height">ALTURA</label>
              <InputMask
                mask="9.99"
                maskChar=""
                defaultValue={student && student.height}
              >
                {() => <Input name="height" type="text" placeholder="1.78m" />}
              </InputMask>
            </div>
          </div>
        </ContainerBodyForm>
      </Form>
    </>
  );
}

StudentsEdit.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
};
