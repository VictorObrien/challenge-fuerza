// eslint-disable-next-line no-use-before-define
import React, { createContext, useCallback, useContext, useState } from 'react';
import http from '../services/api';
import { User } from '../interfaces/user.interface';

import Loading from '../components/loading';

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: User;
  token: string;
  isAuthenticaded: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  setLoading(arg0: boolean): void;
  reloading(): void;
  reload: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [isAuthenticaded, setIsAuthenticated] = useState(false);
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('Nocturnal:token');
    const user = localStorage.getItem('Nocturnal:user');
    const token_date = localStorage.getItem('Nocturnal:session-date');
    if (token && user && token_date) {
      return { token, user: JSON.parse(user), token_date: Number(token_date) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ username, password }) => {
    setLoading(true);
    const response: AuthState = await http.post('/auth/login', {
      username,
      password,
    });
    const { token, user } = response;

    if (token) {
      setIsAuthenticated(true);
    }

    localStorage.setItem('@Nocturnal:token', token);
    localStorage.setItem('@Nocturnal:user', JSON.stringify(user));
    setData({ token, user });
    setLoading(false);
  }, []);

  const signOut = useCallback(() => {
    setLoading(true);
    localStorage.removeItem('@Nocturnal:token');
    localStorage.removeItem('@Nocturnal:user');
    setData({} as AuthState);
    setLoading(false);
  }, []);

  const reloading = () => {
    setReload(!reload);
  };

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        token: data.token,
        isAuthenticaded,
        signIn,
        signOut,
        setLoading,
        reloading,
        reload,
      }}
    >
      {loading && <Loading />}
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
