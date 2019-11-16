/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Header from '~/components/ContainerHeader';
import ContainerBodyForm from '~/components/ContainerBodyForm';

import api from '~/services/api';

const schema = Yup.object().shape({
  student_id: Yup.string().required('O aluno é obrigatório'),
  plan_id: Yup.string().required('Plano é obrigatório'),
  start_date: Yup.string().required('A data de início é obrigatório'),
});

export default function EnrollmentsAdd({ history }) {
  async function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Header>
          <h1>Cadastro de matrícula</h1>

          <div>
            <Link to="/enrollments">
              <MdKeyboardArrowLeft color="#fff" size={20} />
              VOLTAR
            </Link>
            <button type="submit" className="gymcolor">
              <MdCheck color="#fff" size={20} />
              SALVAR
            </button>
          </div>
        </Header>

        <ContainerBodyForm>...</ContainerBodyForm>
      </Form>
    </>
  );
}

EnrollmentsAdd.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
