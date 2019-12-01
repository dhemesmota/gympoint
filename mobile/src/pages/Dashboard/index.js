/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';

import api from '~/services/api';

import Background from '~/styles/Background';
import Button from '~/components/Button';
import CheckIn from '~/components/CheckIn';
import Logout from '~/components/Logout';
import Header from '~/components/Header';

import { Container, List } from './styles';

export default function Dashboard() {
  const [checkIns, setCheckIns] = useState([]);
  const studentId = useSelector(state => state.auth.tokenId);
  const [limit, setLimit] = useState(0);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [refreshing] = useState(false);

  useEffect(() => {
    async function loadCheckIns() {
      const response = await api.get(`students/${studentId}/checkins`);
      setCheckIns(response.data.checkins);
      setCount(response.data.count);
      setLimit(response.data.limit);
      setPage(1);
    }

    loadCheckIns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleCheckIn() {
    try {
      const response = await api.post(`students/${studentId}/checkins`);

      setCheckIns([response.data, ...checkIns]);

      Alert.alert('Parabéns!', 'Seu check-in foi efetuado com sucesso!');
    } catch (err) {
      if (err.response.status === 401) {
        Alert.alert(
          'Ooops!',
          'Você já atingiu o limite máximo de check-ins hoje.',
        );
      } else {
        Alert.alert('Erro', err.response.data.error);
      }
    }
  }

  async function loadMore() {
    const next = page + 1;

    if (next * limit - limit <= count) {
      const response = await api.get(
        `students/${studentId}/checkins?page=${next}`,
      );

      if (response.data.checkins) {
        setPage(next);
        setCheckIns([...checkIns, ...response.data.checkins]);
      }
    }
  }

  async function refreshList() {
    const response = await api.get(`students/${studentId}/checkins`);

    setCheckIns(response.data.checkins);
    setPage(1);
  }

  return (
    <Background>
      <Container>
        <Button onPress={handleCheckIn}>Novo check-in</Button>

        <List
          onEndReachedThreshold={0.1}
          onEndReached={loadMore}
          onRefresh={refreshList}
          refreshing={refreshing}
          data={checkIns}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <CheckIn data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  headerTitle: <Header />,
  headerRight: () => <Logout />,
};
