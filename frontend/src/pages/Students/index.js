import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';
import { Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

// import { Container } from './styles';

import Header from '~/components/ContainerHeader';
import ContainerBody from '~/components/ContainerBody';

import api from '~/services/api';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get(`/students?q=${query}`);

      setStudents(response.data);
    }

    loadStudents();
  }, [query]);

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
  }

  return (
    <>
      <Header>
        <h1>Gerenciando alunos</h1>

        <div>
          <Link to="/students/add" className="gymcolor">
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
                      <Link
                        to={`/students/edit/${student.id}`}
                        className="edit"
                      >
                        editar
                      </Link>
                      <button
                        type="button"
                        className="delete"
                        onClick={() =>
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
      </ContainerBody>
    </>
  );
}
