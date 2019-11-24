import React from 'react';
import { MdArrowForward } from 'react-icons/md';

import { Container, Card } from './styles';

import Header from '~/components/ContainerHeader';
import ContainerBody from '~/components/ContainerBody';

import IconStudent from '~/assets/icon-student.svg';
import IconPlan from '~/assets/icon-plan.svg';
import IconHelp from '~/assets/icon-help.svg';
import IconEnrollment from '~/assets/icon-enrollment.svg';

export default function Dashboard() {
  return (
    <>
      <Header>
        <h1>Dashboard</h1>
      </Header>

      <ContainerBody>
        <Container>
          <Card to="/students">
            <div className="left">
              <span>
                <img src={IconStudent} alt="IconStudent" />
              </span>
            </div>

            <div className="right">
              <h1>ALUNOS</h1>
              <span>Gerenciar alunos</span>
              <small>
                Listar <MdArrowForward size={16} color="#000" />
              </small>
            </div>
          </Card>

          <Card to="/plans">
            <div className="left">
              <span>
                <img src={IconPlan} alt="IconPlan" />
              </span>
            </div>

            <div className="right">
              <h1>PLANOS</h1>
              <span>Gerenciar planos</span>
              <small>
                Listar <MdArrowForward size={16} color="#000" />
              </small>
            </div>
          </Card>

          <Card to="/enrollments">
            <div className="left">
              <span>
                <img src={IconEnrollment} alt="IconEnrollment" />
              </span>
            </div>

            <div className="right">
              <h1>MATRÍCULAS</h1>
              <span>Gerenciar matrículas</span>
              <small>
                Listar <MdArrowForward size={16} color="#000" />
              </small>
            </div>
          </Card>

          <Card to="/help-orders">
            <div className="left">
              <span>
                <img src={IconHelp} alt="IconHelp" />
              </span>
            </div>

            <div className="right">
              <h1>PEDIDOS DE AUXÍLIO</h1>
              <span>Gerenciar pedidos de auxílio</span>
              <small>
                Listar <MdArrowForward size={16} color="#000" />
              </small>
            </div>
          </Card>
        </Container>
      </ContainerBody>
    </>
  );
}
