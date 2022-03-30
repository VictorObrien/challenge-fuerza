/* eslint-disable react/require-default-props */
// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/Auth';
import { useToast } from '../hooks/Toast';
import { getStorageToken } from '../storage';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user, signOut, reload } = useAuth();
  const { addToast } = useToast();

  const token = getStorageToken();

  useEffect(() => {
    if (!token) {
      signOut();
      addToast({
        type: 'error',
        title: 'Sessão expirada',
        description: 'Sua sessão expirou. Realize o login novamente!',
      });
    }
  }, [addToast, signOut, reload, token]);

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/journals',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
