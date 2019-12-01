/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Header from '~/components/ContainerHeader';
import ContainerBody from '~/styles/ContainerBody';

import Loading from '~/components/Animation/Loading';

import Modal from '~/components/Modal';
import Button from '~/styles/Button';

import { formatPrice } from '~/util/format';

export default function Plans({ history }) {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    open: false,
    value: null,
  });

  useEffect(() => {
    async function handlePlans() {
      setLoading(true);

      const response = await api.get('/plans');

      const data = response.data.map(plan => ({
        ...plan,
        duration_formated: `${
          plan.duration > 1 ? `${plan.duration} meses` : `${plan.duration} mês`
        }`,
        price_formated: formatPrice(plan.price),
      }));

      setPlans(data);
      setLoading(false);
    }

    handlePlans();
  }, []);

  async function handleDelete(id) {
    try {
      await api.delete(`/plans/${id}`);

      setPlans(plans.filter(plan => plan.id !== id));
      toast.success('Plano apagado com sucesso!');
    } catch (err) {
      toast.error('Não foi possível encontrar o plano selecionado.');
    }

    setModal({ open: false, value: null });
  }

  function handleEdit(plan) {
    history.push(`/plans/${plan.id}/edit`, { plan });
  }

  return (
    <>
      <Header title="Gerenciando planos" buttonAdd="/plans/new" />

      <ContainerBody>
        {loading ? (
          <Loading />
        ) : (
          <table>
            <thead>
              <tr>
                <th>TÍTULO</th>
                <th className="center">DURAÇÃO</th>
                <th className="center">VALOR p/ MÊS</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {plans &&
                plans.map(plan => (
                  <tr key={plan.id}>
                    <td>{plan.title}</td>
                    <td className="center">{plan.duration_formated}</td>
                    <td className="center">{plan.price_formated}</td>
                    <td>
                      <span>
                        <button
                          onClick={() => handleEdit(plan)}
                          type="button"
                          className="edit"
                        >
                          editar
                        </button>
                        <button
                          type="button"
                          className="delete"
                          onClick={() =>
                            setModal({ open: true, value: plan.id })
                          }
                        >
                          apagar
                        </button>
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </ContainerBody>

      {modal.open && (
        <Modal title="Apagar plano" size="small">
          <p>Deseja realmente apagar o plano selecionado?</p>
          <div>
            <Button onClick={() => setModal({ open: false, value: null })}>
              CANCELAR
            </Button>
            <Button
              onClick={() => handleDelete(modal.value)}
              className="gymcolor"
            >
              APAGAR
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}

Plans.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
