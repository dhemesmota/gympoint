import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdAdd, MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import { Container } from './styles';

export default function ContainerHeader({
  title,
  buttonAdd,
  buttonAddText,
  buttonBack,
  buttonBackText,
  buttonSubmit,
  buttonSubmitText,
  children,
}) {
  return (
    <Container>
      {title && <h1>{title}</h1>}
      <div>
        {buttonAdd && (
          <Link to={buttonAdd || '/'} className="gymcolor">
            <MdAdd color="#fff" size={20} />
            {buttonAddText || 'CADASTRAR'}
          </Link>
        )}

        {buttonBack && (
          <Link to={buttonBack || ''}>
            <MdKeyboardArrowLeft color="#fff" size={20} />
            {buttonBackText || 'VOLTAR'}
          </Link>
        )}

        {buttonSubmit && (
          <button type="submit" className="gymcolor">
            <MdCheck color="#fff" size={20} />
            {buttonSubmitText || 'SALVAR'}
          </button>
        )}

        {children}
      </div>
    </Container>
  );
}

ContainerHeader.propTypes = {
  title: PropTypes.string,
  buttonAdd: PropTypes.string,
  buttonAddText: PropTypes.string,
  buttonBack: PropTypes.string,
  buttonBackText: PropTypes.string,
  buttonSubmit: PropTypes.bool,
  buttonSubmitText: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ContainerHeader.defaultProps = {
  title: '',
  buttonAdd: '',
  buttonAddText: '',
  buttonBack: '',
  buttonBackText: '',
  buttonSubmit: false,
  buttonSubmitText: '',
  children: null,
};
