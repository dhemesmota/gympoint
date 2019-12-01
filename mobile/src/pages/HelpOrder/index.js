import React, { useState, useEffect } from 'react';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/styles/Background';
import Button from '~/components/Button';
import Help from '~/components/Help';
import Logout from '~/components/Logout';

import { Container, ListHelp } from './styles';
import logo from '~/assets/logo-vertical.png';

function HelpOrder({ navigation, isFocused }) {
  const [helpOrders, setHelpOrders] = useState([]);
  const studentId = useSelector(state => state.auth.tokenId);
  const [limit, setLimit] = useState(0);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [refreshing] = useState(false);

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get(`students/${studentId}/help-orders`);

      setHelpOrders(response.data.helpOrders);
      setCount(response.data.count);
      setLimit(response.data.limit);
      setPage(1);
    }

    loadHelpOrders();
  }, [studentId, isFocused]);

  async function loadMore() {
    const next = page + 1;

    if (next * limit - limit <= count) {
      const response = await api.get(
        `students/${studentId}/help-orders?page=${next}`,
      );

      if (response.data.helpOrders) {
        setPage(next);
        setHelpOrders([...helpOrders, ...response.data.helpOrders]);
      }
    }
  }

  async function refreshList() {
    const response = await api.get(`students/${studentId}/help-orders`);

    setHelpOrders(response.data.helpOrders);
    setPage(1);
  }

  return (
    <Background>
      <Container>
        <Button onPress={() => navigation.navigate('New')}>
          Novo pedido de auxílio
        </Button>

        <ListHelp
          onEndReachedThreshold={0.05}
          onEndReached={loadMore}
          onRefresh={refreshList}
          refreshing={refreshing}
          data={helpOrders}
          keyExtractor={item => String(item.id)}
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
  headerRight: () => <Logout />,
};

HelpOrder.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(HelpOrder);
