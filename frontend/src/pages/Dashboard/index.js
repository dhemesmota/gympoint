import React from 'react';

// import { Container } from './styles';

import Header from '~/components/ContainerHeader';
import ContainerBody from '~/components/ContainerBody';

export default function Dashboard() {
  return (
    <>
      <Header>
        <h1>Dashboard</h1>
      </Header>

      <ContainerBody />
    </>
  );
}
