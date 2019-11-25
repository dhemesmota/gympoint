import React from 'react';

import { Container, Title, DateText } from './styles';

export default function CheckIn({ data }) {
  return (
    <Container>
      <Title>Check-in</Title>
      <DateText>Há 1 mês</DateText>
    </Container>
  );
}
