import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Title } from './styles';

export default function Modal({ children, title, size }) {
  return (
    <Container>
      <Content size={size}>
        {title && <Title>{title}</Title>}
        {children}
      </Content>
    </Container>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  size: PropTypes.string,
  title: PropTypes.string,
};

Modal.defaultProps = {
  size: 'default',
  title: null,
};
