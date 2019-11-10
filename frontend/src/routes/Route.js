import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import PerfectScrollbar from 'react-perfect-scrollbar';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  menu,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <PerfectScrollbar>
          <Layout active={menu}>
            <Component {...props} />
          </Layout>
        </PerfectScrollbar>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  menu: PropTypes.string,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  menu: '',
};
