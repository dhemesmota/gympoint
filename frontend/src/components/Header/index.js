import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo-horizontal.svg';

export default function Header({ activedMenu }) {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);

  const menus = [
    { title: 'DASHBOARD', route: 'dashboard' },
    { title: 'ALUNOS', route: 'students' },
    { title: 'PLANOS', route: 'plans' },
    { title: 'MATRÍCULAS', route: 'enrollments' },
    { title: 'PEDIDOS DE AUXÍLIO', route: 'questions' },
  ];

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />

          {menus &&
            menus.map(menu => (
              <Link
                key={menu.route}
                to={`/${menu.route}`}
                className={menu.route === activedMenu ? 'active' : ''}
              >
                {menu.title}
              </Link>
            ))}
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

Header.propTypes = {
  activedMenu: PropTypes.string.isRequired,
};
