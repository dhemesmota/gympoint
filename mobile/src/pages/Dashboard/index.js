/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/styles/Background';
import Header from '~/components/Header';
import Button from '~/components/Button';
import CheckIn from '~/components/CheckIn';

import { Container, List } from './styles';

export default function Dashboard() {
  const [checkIns, setCheckIns] = useState([]);
  const studentId = useSelector(state => state.auth.tokenId);

  useEffect(() => {
    async function loadCheckIns() {
      const response = await api.get(`students/${studentId}/checkins`);
      setCheckIns(response.data);
    }

    loadCheckIns();
  }, [studentId]);

  async function handleCheckIn() {
    try {
      const response = await api.post(`students/${studentId}/checkins`);

      setCheckIns([response.data, ...checkIns]);

      Alert.alert('Check-in', 'Seu check-in foi efetuado com sucesso!');
    } catch (err) {
      console.tron.warn(err.response);
      Alert.alert('Erro', err.response.data.error);
    }
  }

  return (
    <Background>
      <Header />
      <Container>
        <Button onPress={handleCheckIn}>Novo check-in</Button>

        <List
          data={checkIns}
          keyExtractor={item => String(item.id)}
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
