import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/styles/Background';
import Header from '~/components/Header';
import Button from '~/components/Button';
import Help from '~/components/Help';

import { Container, ListHelp } from './styles';

export default function HelpOrder() {
  const [helpOrders, setHelpOrders] = useState([]);
  const studentId = useSelector(state => state.auth.tokenId);

  useEffect(() => {
    async function handleHelpOrders() {
      const response = await api.get(`students/${studentId}/help-orders`);

      setHelpOrders(response.data);
    }

    handleHelpOrders();
  }, [studentId]);

  return (
    <Background>
      <Header />
      <Container>
        <Button onPress={() => {}}>Novo pedido de auxílio</Button>

        <ListHelp
          data={helpOrders}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Help data={item} />}
        />
      </Container>
    </Background>
  );
}

HelpOrder.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="help-outline" size={20} color={tintColor} />
  ),
};
