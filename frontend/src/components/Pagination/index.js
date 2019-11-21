import React from 'react';
import PropTypes from 'prop-types';

import { ContainerList, LinkList, DisabledLink } from './styles';

export default function Pagination({ total, page, limit, selectPg }) {
  const totalPage = Math.ceil(total / limit);
  console.tron.error(page);
  const items = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= totalPage; i++) {
    items.push({ value: i, active: i === page ? 'active' : '' });
  }

  console.tron.warn(items);
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
  total: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  limit: PropTypes.string.isRequired,
  selectPg: PropTypes.func.isRequired,
};
