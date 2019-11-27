import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Background from '~/styles/Background';

import Header from '~/components/Header';

import { Container, Content, TInput, SubmitButton } from './styles';

export default function New({ navigation }) {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const studentId = useSelector(state => state.auth.tokenId);

  async function handleSubmit() {
    setLoading(true);
    try {
      await api.post(`students/${studentId}/help-orders`, { question });
      Alert.alert('Sucesso!', 'Pedido de auxílio enviado.');
      navigation.navigate('HelpOrder');
    } catch (err) {
      Alert.alert('Erro!', 'Não foi possível enviar o pedido de auxílio.');
    }
    setLoading(false);
  }

  return (
    <Background>
      <Container>
        <Content>
          <TInput
            multiline
            autoCorrect={false}
            numberOfLines={4}
            placeholder="Inclua seu pedido de auxílio"
            onChangeText={text => setQuestion(text)}
            value={question}
          />

          <SubmitButton onPress={handleSubmit} loading={loading}>
            Enviar pedido
          </SubmitButton>
        </Content>
      </Container>
    </Background>
  );
}

New.navigationOptions = {
  headerTitle: <Header />,
  headerTintColor: '#EE4E62',
};

New.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
