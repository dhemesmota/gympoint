import React from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';
import { Input } from '@rocketseat/unform';

// import { Container } from './styles';

import Header from '~/components/ContainerHeader';
import ContainerBody from '~/components/ContainerBody';

export default function Students() {
  return (
    <>
      <Header>
        <h1>Gerenciando alunos</h1>

        <div>
          <button type="button" className="gymcolor">
            <MdAdd color="#fff" size={20} />
            CADASTRAR
          </button>
          <span>
            <Input
              label={<MdSearch color="#999" size={20} />}
              name="search"
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
            <tr>
              <td>Dhemes</td>
              <td>dhemes@gmail.com</td>
              <td>24</td>
              <td>
                <span>
                  <button type="button" className="edit">
                    editar
                  </button>
                  <button type="button" className="delete">
                    apagar
                  </button>
                </span>
              </td>
            </tr>
            <tr>
              <td>Dhemes</td>
              <td>dhemes@gmail.com</td>
              <td>24</td>
              <td>
                <span>
                  <button type="button" className="edit">
                    editar
                  </button>
                  <button type="button" className="delete">
                    apagar
                  </button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </ContainerBody>
    </>
  );
}
