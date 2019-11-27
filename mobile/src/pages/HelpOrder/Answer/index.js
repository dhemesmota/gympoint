import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Background from '~/styles/Background';

import Header from '~/components/Header';

import {
  Container,
  Content,
  HeaderTitle,
  TitleDay,
  Title,
  Description,
  Waiting,
} from './styles';

export default function Answer({ navigation }) {
  const { data } = navigation.state.params;
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.createdAt]);

  return (
    <Background>
      <Container>
        <Content>
          <HeaderTitle>
            <Title>PERGUNTA</Title>
            <TitleDay>{dateParsed}</TitleDay>
          </HeaderTitle>
          <Description>{data.question}</Description>
          <Title>RESPOSTA</Title>
          <Description>
            {data.answer ? (
              data.answer
            ) : (
              <Waiting>Aguardando resposta!</Waiting>
            )}
          </Description>
        </Content>
      </Container>
    </Background>
  );
}

Answer.navigationOptions = {
  headerTitle: <Header />,
  headerTintColor: '#EE4E62',
};

Answer.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.object.isRequired,
  }).isRequired,
};
