import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAdd, MdCheckCircle, MdBlock } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Header from '~/components/ContainerHeader';
import ContainerBody from '~/components/ContainerBody';

import Loading from '~/components/Loading';

export default function Enrollments() {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function handleEnrollments() {
      setLoading(true);

      const response = await api.get('/enrollments');

      const data = response.data.map(enrollment => ({
        ...enrollment,
        start_date: format(
          parseISO(enrollment.start_date),
          "d 'de' MMMM 'de' yyyy",
          {
            locale: pt,
          }
        ),
        end_date: format(
          parseISO(enrollment.end_date),
          "d 'de' MMMM 'de' yyyy",
          {
            locale: pt,
          }
        ),
      }));

      setEnrollments(data);
      console.tron.log(response.data);
      setLoading(false);
    }

    handleEnrollments();
  }, []);

  async function handleDelete(id) {
    try {
      await api.delete(`/enrollments/${id}`);

      setEnrollments(enrollments.filter(enrollment => enrollment.id !== id));
    } catch (err) {
      toast.error('Não foi possível encontrar a matrícula selecionada.');
    }
  }

  return (
    <>
      <Header>
        <h1>Gerenciando matrículas</h1>

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
                <th>ALUNO</th>
                <th className="center">PLANO</th>
                <th className="center">INÍCIO</th>
                <th className="center">TÉRMINO</th>
                <th className="center">ATIVA</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {enrollments &&
                enrollments.map(enrollment => (
                  <tr key={enrollment.id}>
                    <td>{enrollment.student && enrollment.student.name}</td>
                    <td className="center">
                      {enrollment.plan && enrollment.plan.title}
                    </td>
                    <td className="center">{enrollment.start_date}</td>
                    <td className="center">{enrollment.end_date}</td>
                    <td className="center">
                      {enrollment.active ? (
                        <MdCheckCircle size={20} color="#16ad4b" />
                      ) : (
                        <MdBlock size={20} color="#ddd" />
                      )}
                    </td>
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
                            ) && handleDelete(enrollment.id)
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
