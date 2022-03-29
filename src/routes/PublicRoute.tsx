// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';
import { isExpired } from 'react-jwt';

import { useAuth } from '../hooks/Auth';
import { useToast } from '../hooks/Toast';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

const PublicRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { signOut, reload, token } = useAuth();
  const { addToast } = useToast();

  useEffect(() => {
    if (token) {
      const isMyTokenExpired = isExpired(token);
      if (isMyTokenExpired) {
        signOut();
        addToast({
          type: 'error',
          title: 'Sessão expirada',
          description: 'Sua sessão expirou. Realize o login novamente!',
        });
      }
    }
  }, [addToast, signOut, reload, token]);

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return !token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: '/home',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PublicRoute;
