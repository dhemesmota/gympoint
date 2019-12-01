/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAdd, MdCheckCircle, MdBlock } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Header from '~/components/ContainerHeader';
import ContainerBody from '~/styles/ContainerBody';

import Loading from '~/components/Loading';
import Pagination from '~/components/Pagination';

import Modal from '~/components/Modal';
import Button from '~/styles/Button';

export default function Enrollments({ history }) {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    open: false,
    value: null,
  });

  const [limitItems, setLimitItems] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function handleEnrollments() {
      setLoading(true);

      const response = await api.get(`/enrollments?page=${page}`);

      const data = response.data.enrollments.map(enrollment => ({
        ...enrollment,
        start_date_formated: format(
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
      setLimitItems(response.data.limit);
      setTotalItems(response.data.count);

      setLoading(false);
    }

    handleEnrollments();
  }, [page]);

  async function handleDelete(id) {
    try {
      await api.delete(`/enrollments/${id}`);

      setEnrollments(enrollments.filter(enrollment => enrollment.id !== id));
      toast.success('Matrícula apagada com sucesso!');
    } catch (err) {
      toast.error('Não foi possível encontrar a matrícula selecionada.');
    }
    setModal({ open: false, value: null });
  }

  function handlePage(p) {
    setPage(p);
  }

  function handleEdit(enrollment) {
    history.push(`/enrollments/${enrollment.id}/edit`, { enrollment });
  }

  return (
    <>
      <Header>
        <h1>Gerenciando matrículas</h1>

        <div>
          <Link to="/enrollments/new" className="gymcolor">
            <MdAdd color="#fff" size={20} />
            CADASTRAR
          </Link>
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
                    <td className="center">{enrollment.start_date_formated}</td>
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
                        <button
                          onClick={() => handleEdit(enrollment)}
                          type="button"
                          className="edit"
                        >
                          editar
                        </button>
                        <button
                          type="button"
                          className="delete"
                          onClick={() =>
                            setModal({ open: true, value: enrollment.id })
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
        <Pagination
          total={totalItems}
          page={page}
          limit={limitItems}
          selectPg={handlePage}
        />
      </ContainerBody>

      {modal.open && (
        <Modal title="Apagar matrícula" size="small">
          <p>Deseja realmente apagar a matrícula selecionada?</p>
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

Enrollments.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
