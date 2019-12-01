import React from 'react';

import { Container } from './styles';

import Header from '~/components/ContainerHeader';
import ContainerBody from '~/styles/ContainerBody';
import Card from '~/components/Card/CardDashboard';

import IconStudent from '~/assets/icon-student.svg';
import IconPlan from '~/assets/icon-plan.svg';
import IconHelp from '~/assets/icon-help.svg';
import IconEnrollment from '~/assets/icon-enrollment.svg';

export default function Dashboard() {
  return (
    <>
      <Header title="Dashboard" />

      <ContainerBody>
        <Container>
          <Card link="/students" image={IconStudent} title="Alunos" />
          <Card link="/plans" image={IconPlan} title="Planos" />
          <Card link="/enrollments" image={IconEnrollment} title="Matrículas" />
          <Card
            link="/help-orders"
            image={IconHelp}
            title="Pedidos de auxílio"
          />
        </Container>
      </ContainerBody>
    </>
  );
}
