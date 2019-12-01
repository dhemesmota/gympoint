import React from 'react';
import { MdArrowForward } from 'react-icons/md';

import { Card } from './styles';

export default function CardDashboard({ link, image, title }) {
  return (
    <Card to={link}>
      <div className="left">
        <span>
          <img src={image} alt={title} />
        </span>
      </div>

      <div className="right">
        <h1>{title}</h1>
        <span>
          Gerenciar <span>{title}</span>
        </span>
        <small>
          Ir para página <MdArrowForward size={16} color="#000" />
        </small>
      </div>
    </Card>
  );
}
