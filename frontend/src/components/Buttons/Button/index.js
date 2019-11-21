import React from 'react';

import { Container } from './styles';

export default function Button({ title, color, icon, click }) {
  return (
    <Container onClick={click} style={color && { background: color }}>
      {icon}
      {title}
    </Container>
  );
}
