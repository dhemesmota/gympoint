import React from 'react';
import PropTypes from 'prop-types';

import Background from '~/styles/Background';

import Header from '~/components/Header';

export default function New() {
  return <Background />;
}

New.navigationOptions = {
  headerTitle: <Header />,
  headerTintColor: '#EE4E62',
};

New.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
