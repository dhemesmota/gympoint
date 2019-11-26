import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Header, Title, DateText, Content } from './styles';

export default function Help({ data, navigation }) {
  console.tron.log(data);
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
