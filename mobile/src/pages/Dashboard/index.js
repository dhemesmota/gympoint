import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/styles/Background';
import Header from '~/components/Header';
// import { Container } from './styles';

export default function Dashboard() {
  return (
    <Background>
      <Header />
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="check" size={20} color={tintColor} />
  ),
};
