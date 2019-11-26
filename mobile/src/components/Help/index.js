import React from 'react';

import { Container, Header, Title, DateText, Content } from './styles';

export default function Help({ data }) {
  return (
    <Container>
      <Header>
        <Title>Sem resposta</Title>
        <DateText>Hoje às 14h</DateText>
      </Header>
      <Content>
        Olá pessoal da academia, gostaria de saber se quando acordar devo
        ingerir batata doce e frango logo de primeira, preparar as...
      </Content>
    </Container>
  );
}
