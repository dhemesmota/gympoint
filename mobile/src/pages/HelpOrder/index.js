import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/styles/Background';
import Header from '~/components/Header';
// import { Container } from './styles';

export default function HelpOrder() {
  return (
    <Background>
      <Header />
    </Background>
  );
}

HelpOrder.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="help-outline" size={20} color={tintColor} />
  ),
};
