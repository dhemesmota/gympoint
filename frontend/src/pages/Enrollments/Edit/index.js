/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { format, addMonths } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
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
  plan_id: Yup.string().required('O plano é obrigatório'),
  start_date: Yup.date().required('A data de ínicio é obrigatória'),
});

export default function EnrollmentsEdit({ history, match, location }) {
  const { id } = match.params;
  const { enrollment } = location.state;

  console.tron.log(enrollment);

  const [plans, setPlans] = useState([]);
  const [startDate, setStartDate] = useState(new Date(enrollment.start_date));
  const [endValue, setEndValue] = useState('');
  const [endDate, setEndDate] = useState('');
  const [duration, setDuration] = useState(enrollment.plan.duration);

  async function handleSubmit(data) {
    try {
      await api.put(`/enrollments/${id}`, { ...data });

      toast.success('Matrícula atualizada com sucesso!');
      history.push('/enrollments');
    } catch (err) {
      toast.error(
        err.response.data.error || 'Falha ao atualizar a matrícula do aluno.'
      );
    }
  }

  useEffect(() => {
    async function handlePlans() {
      const response = await api.get('/plans');

      setPlans(response.data);
    }

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
        <Header>
          <h1>Edição de matrícula</h1>

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

        <ContainerFormBody>
          <div className="row">
            <div className="input-group">
              <label htmlFor="student_id">ALUNO</label>
              <input
                id="student_id"
                value={enrollment.student.name}
                type="text"
                disabled
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

EnrollmentsEdit.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
};
