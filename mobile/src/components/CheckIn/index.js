import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Title, DateText } from './styles';

export default function CheckIn({ data }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.createdAt]);

  return (
    <Container>
      <Title>Check-in #{data.id}</Title>
      <DateText>{dateParsed}</DateText>
    </Container>
  );
}

CheckIn.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    createdAt: PropTypes.string,
  }).isRequired,
};
