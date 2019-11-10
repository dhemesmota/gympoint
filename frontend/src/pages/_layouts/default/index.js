import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

import Header from '~/components/Header';

export default function DefaultLayout({ children, active }) {
  return (
    <Wrapper>
      <Header activedMenu={active} />
      <Content>{children}</Content>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
  active: PropTypes.string.isRequired,
};
