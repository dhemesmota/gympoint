/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { format, addMonths } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import Header from '~/components/ContainerHeader';
import ContainerFormBody from '~/styles/ContainerFormBody';

import api from '~/services/api';

import Select from '~/components/Select';
import DatePicker from '~/components/DatePicker';
import { formatPrice } from '~/util/format';

const schema = Yup.object().shape({
  student_id: Yup.string().required('O aluno é obrigatório'),
  plan_id: Yup.string().required('O plano é obrigatório'),
  start_date: Yup.string().required('A data de ínicio é obrigatória'),
});

export default function EnrollmentsNew({ history }) {
  const [students, setStudents] = useState([]);
  const [plans, setPlans] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endValue, setEndValue] = useState('');
  const [endDate, setEndDate] = useState('');
  const [duration, setDuration] = useState(0);

  async function handleSubmit(data) {
    try {
      await api.post('/enrollments', { ...data });

      toast.success('Aluno matriculado com sucesso!');
      history.push('/enrollments');
    } catch (err) {
      toast.error(
        err.response.data.error || 'Falha ao realizar matrícula do aluno.'
      );
    }
  }

  useEffect(() => {
    async function handleStudents() {
      const response = await api.get('/students');

      setStudents(response.data.students);
    }

    async function handlePlans() {
      const response = await api.get('/plans');

      setPlans(response.data);
    }

    handleStudents();
    handlePlans();
  }, []);

  useEffect(() => {
    if (startDate && duration) {
      setEndDate(
        String(
          format(addMonths(startDate, duration), "d 'de' MMMM, yyyy", {
            locale: pt,
          })
        )
      );
    }
  }, [duration, startDate]);

  function handleEndValue(plan) {
    const total = plan.duration * plan.price;

    setDuration(plan.duration);

    setEndValue(formatPrice(total));
  }

  function handleStartDate(date) {
    setStartDate(date);
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Header
          title="Cadastro de matrícula"
          buttonBack="/enrollments"
          buttonSubmit
        />

        <ContainerFormBody>
          <div className="row">
            <div className="input-group">
              <Select
                className="select"
                options={students}
                name="student_id"
                label="ALUNO"
                getOptionLabel={student => student.name}
                getOptionValue={student => student.id}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-group">
              <Select
                className="select"
                options={plans}
                name="plan_id"
                label="PLANO"
                getOptionLabel={plan => plan.title}
                getOptionValue={plan => plan.id}
                onChange={value => handleEndValue(value)}
              />
            </div>
            <div className="input-group">
              <DatePicker
                name="start_date"
                label="DATA DE ÍNICIO"
                dateFormat="d 'de' MMMM, yyyy"
                placeholderText="Clique para selecionar"
                minDate={new Date()}
                selected={startDate}
                onChange={date => handleStartDate(date)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="end_date">DATA DE TÉRMINO</label>
              <input id="end_date" value={endDate} type="text" disabled />
            </div>
            <div className="input-group">
              <label htmlFor="end_value">VALOR FINAL</label>
              <input id="end_value" value={endValue} type="text" disabled />
            </div>
          </div>
        </ContainerFormBody>
      </Form>
    </>
  );
}

EnrollmentsNew.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
