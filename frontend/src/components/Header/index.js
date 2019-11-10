import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo-horizontal.svg';

export default function Header() {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />

          <Link to="/dashboard" className="active">
            DASHBOARD
          </Link>
          <Link to="/dashboard">ALUNOS</Link>
          <Link to="/dashboard">PLANOS</Link>
          <Link to="/dashboard">MATRÍCULAS</Link>
          <Link to="/dashboard">PEDIDOS DE AUXÍLIO</Link>
        </nav>

        <aside>
          <Profile>
            <strong>{profile.name}</strong>
            <button type="button" onClick={handleSignOut}>
              sair do sistema
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
