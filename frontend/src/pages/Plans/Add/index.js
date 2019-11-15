/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
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
  title: Yup.string().required('O título é obrigatório'),
  duration: Yup.string()
    .max(2)
    .required('Duração é obrigatório'),
  price: Yup.string().required('O preço é obrigatório'),
});

export default function PlansAdd({ history }) {
  const [totalPrice, setTotalPrice] = useState('');
  const [duration, setDuration] = useState();
  const [price, setPrice] = useState();

  async function handleSubmit(data) {
    try {
      await api.post('/plans', { ...data });

      toast.success('Plano cadastrado');
      history.push('/plans');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  useEffect(() => {
    if (duration && price) {
      const total = duration * price;

      setTotalPrice(
        total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })
      );
    }
  }, [duration, price]);

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Header>
          <h1>Cadastro de plano</h1>

          <div>
            <Link to="/plans">
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
          <Input label="TÍTULO DO PLANO" name="title" type="text" />

          <div className="row">
            <div className="input-group">
              <label htmlFor="duration">DURAÇÃO (em meses)</label>
              <InputMask
                mask="99"
                maskChar=""
                onChange={e => setDuration(e.target.value)}
              >
                {() => <Input name="duration" type="text" />}
              </InputMask>
            </div>
            <div className="input-group">
              <label htmlFor="price">PREÇO MENSAL</label>
              <InputMask
                mask="99.99"
                maskChar=""
                onChange={e => setPrice(e.target.value)}
              >
                {() => <Input name="price" type="text" />}
              </InputMask>
            </div>
            <div className="input-group">
              <label htmlFor="total">PREÇO TOTAL</label>
              <input id="total" value={totalPrice} type="text" disabled />
            </div>
          </div>
        </ContainerBodyForm>
      </Form>
    </>
  );
}

PlansAdd.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
