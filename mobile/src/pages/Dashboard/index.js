import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/styles/Background';
import Header from '~/components/Header';
import Button from '~/components/Button';
import CheckIn from '~/components/CheckIn';

import { Container, List } from './styles';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Dashboard() {
  return (
    <Background>
      <Header />
      <Container>
        <Button>Novo check-in</Button>

        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <CheckIn data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="check" size={20} color={tintColor} />
  ),
};
