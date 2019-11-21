import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';
import { Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import Header from '~/components/ContainerHeader';
import ContainerBody from '~/components/ContainerBody';

import api from '~/services/api';

import Loading from '~/components/Loading';
import Pagination from '~/components/Pagination';

export default function Students({ history }) {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [limitItems, setLimitItems] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    async function loadStudents() {
      const response = await api.get(`/students?q=${query}&page=${page}`);

      setLimitItems(response.data.limit);
      setTotalItems(response.data.count);
      setStudents(response.data.students);
    }

    loadStudents();
    setLoading(false);
  }, [page, query]);

  async function handleDelete(id) {
    try {
      await api.delete(`/students/${id}`);

      setStudents(students.filter(student => student.id !== id));
    } catch (err) {
      toast.error('Não foi possível encontrar o aluno.');
    }
  }

  function handleFilter() {
    setQuery(search);
    setPage(1);
  }

  function handleEdit(student) {
    history.push(`/students/${student.id}/edit`, { student });
  }

  function handlePage(p) {
    setPage(p);
    console.tron.log(`Pag: ${p}`);
  }

  return (
    <>
      <Header>
        <h1>Gerenciando alunos</h1>

        <div>
          <Link to="/students/new" className="gymcolor">
            <MdAdd color="#fff" size={20} />
            CADASTRAR
          </Link>
          <span>
            <Input
              label={
                <MdSearch
                  color="#999"
                  size={20}
                  onClick={() => handleFilter()}
                />
              }
              name="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              type="text"
              placeholder="Buscar aluno"
            />
          </span>
        </div>
      </Header>

      <ContainerBody>
        {loading ? (
          <Loading />
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>NOME</th>
                  <th>E-MAIL</th>
                  <th>IDADE</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {students &&
                  students.map(student => (
                    <tr key={student.id}>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.age}</td>
                      <td>
                        <span>
                          <button
                            onClick={() => handleEdit(student)}
                            type="button"
                            className="edit"
                          >
                            editar
                          </button>
                          <button
                            type="button"
                            className="delete"
                            onClick={() =>
                              // eslint-disable-next-line no-alert
                              window.confirm(
                                'Deseja realmente deletar os dados do estudante?'
                              ) && handleDelete(student.id)
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

            <Pagination
              total={totalItems}
              page={page}
              limit={limitItems}
              selectPg={handlePage}
            />
          </>
        )}
      </ContainerBody>
    </>
  );
}

Students.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
