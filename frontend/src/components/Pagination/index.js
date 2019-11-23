import React from 'react';
import PropTypes from 'prop-types';

import { ContainerList, LinkList, DisabledLink } from './styles';

export default function Pagination({ total, page, limit, selectPg }) {
  const totalPage = Math.ceil(total / limit);

  if (totalPage === 1) {
    return <span />;
  }

  const items = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= totalPage; i++) {
    items.push({ value: i, active: i === page ? 'active' : '' });
  }

  return (
    <ContainerList>
      {items &&
        items.map(item =>
          item.active ? (
            <DisabledLink key={item.value}>{item.value}</DisabledLink>
          ) : (
            <LinkList key={item.value} onClick={() => selectPg(item.value)}>
              {item.value}
            </LinkList>
          )
        )}
    </ContainerList>
  );
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  selectPg: PropTypes.func.isRequired,
};
