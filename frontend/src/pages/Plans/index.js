/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Header from '~/components/ContainerHeader';
import ContainerBody from '~/components/ContainerBody';

import Loading from '~/components/Loading';

export default function Plans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function handlePlans() {
      setLoading(true);

      const response = await api.get('/plans');

      const data = response.data.map(plan => ({
        ...plan,
        duration: `${
          plan.duration > 1 ? `${plan.duration} meses` : `${plan.duration} mês`
        }`,
        price: plan.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
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
    } catch (err) {
      toast.error('Não foi possível encontrar o plano selecionado.');
    }
  }

  return (
    <>
      <Header>
        <h1>Gerenciando planos</h1>

        <div>
          <button type="button" className="gymcolor">
            <MdAdd color="#fff" size={20} />
            CADASTRAR
          </button>
        </div>
      </Header>

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
                    <td className="center">{plan.duration}</td>
                    <td className="center">{plan.price}</td>
                    <td>
                      <span>
                        <button type="button" className="edit">
                          editar
                        </button>
                        <button
                          type="button"
                          className="delete"
                          onClick={() =>
                            window.confirm(
                              'Deseja realmente deletar os dados selecionado?'
                            ) && handleDelete(plan.id)
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
    </>
  );
}
