import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Header, Title, DateText, Content } from './styles';

export default function Help({ data, navigation }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.createdAt]);
  return (
    <Container onPress={() => navigation.navigate('Answer', { data })}>
      <Header>
        <Title answer={data.answer_at}>
          {data.answer_at ? 'Respondido' : 'Sem resposta'}
        </Title>
        <DateText>{dateParsed}</DateText>
      </Header>
      <Content>{data.question}</Content>
    </Container>
  );
}

Help.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.number]).isRequired,
};
