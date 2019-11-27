import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/styles/Background';
import Button from '~/components/Button';
import Help from '~/components/Help';

import { Container, ListHelp } from './styles';
import logo from '~/assets/logo-vertical.png';

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
  headerTitle: <Image source={logo} />,
  tabBarLabel: 'Pedir ajuda',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="help-outline" size={20} color={tintColor} />
  ),
};

HelpOrder.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
