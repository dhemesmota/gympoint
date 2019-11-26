import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/styles/Background';
import Header from '~/components/Header';
import Button from '~/components/Button';
import Help from '~/components/Help';

import { Container, ListHelp } from './styles';

export default function HelpOrder({ navigation }) {
  const [helpOrders, setHelpOrders] = useState([]);
  const studentId = useSelector(state => state.auth.tokenId);

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get(`students/${studentId}/help-orders`);

      setHelpOrders(response.data);
    }

    loadHelpOrders();
  }, [studentId]);

  return (
    <Background>
      <Header />
      <Container>
        <Button onPress={() => navigation.navigate('New')}>
          Novo pedido de auxílio
        </Button>

        <ListHelp
          data={helpOrders}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <Help data={item} navigation={navigation} />
          )}
        />
      </Container>
    </Background>
  );
}

HelpOrder.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="help-outline" size={20} color="#666" />
  ),
};
