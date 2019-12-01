/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import InputMask from 'react-input-mask';

import api from '~/services/api';

import Header from '~/components/ContainerHeader';
import ContainerFormBody from '~/styles/ContainerFormBody';

import { formatPrice } from '~/util/format';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  duration: Yup.string()
    .max(2)
    .required('Duração é obrigatório'),
  price: Yup.string().required('O preço é obrigatório'),
});

export default function PlansNew({ history }) {
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
      setTotalPrice(formatPrice(duration * price));
    }
  }, [duration, price]);

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Header title="Cadastro de plano" buttonBack="/plans" buttonSubmit />

        <ContainerFormBody>
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
        </ContainerFormBody>
      </Form>
    </>
  );
}

PlansNew.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
