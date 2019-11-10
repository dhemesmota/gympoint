import React from 'react';
import { MdAssignmentTurnedIn } from 'react-icons/md';

// import { Container } from './styles';

import Header from '~/components/ContainerHeader';
import ContainerBody from '~/components/ContainerBody';

export default function Enrollments() {
  return (
    <>
      <Header>
        <h1>Matrículas</h1>

        <div>
          <button type="button">
            <MdAssignmentTurnedIn color="#fff" size={20} />
            Legal
          </button>
          <button type="button" className="gymcolor">
            <MdAssignmentTurnedIn color="#fff" size={20} />
            CADASTRAR
          </button>
        </div>
      </Header>

      <ContainerBody />
    </>
  );
}
