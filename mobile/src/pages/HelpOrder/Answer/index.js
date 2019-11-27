import React from 'react';

import Background from '~/styles/Background';

import Header from '~/components/Header';

export default function Answer() {
  return <Background />;
}

Answer.navigationOptions = {
  headerTitle: <Header />,
  headerTintColor: '#EE4E62',
};
