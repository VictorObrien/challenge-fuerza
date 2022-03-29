// eslint-disable-next-line no-use-before-define
import React, { createContext, useCallback, useContext, useState } from 'react';
import http from '../services/api';

import Loading from '../components/loading';

interface UserData {
  email: string;
  id: string;
  name: string;
}

interface AuthState {
  token: string;
  user: UserData;
  token_date: number;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: UserData;
  token: string;
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
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('Nocturnal:token');
    const user = localStorage.getItem('Nocturnal:user');
    const token_date = localStorage.getItem('Nocturnal:session-date');
    if (token && user && token_date) {
      return { token, user: JSON.parse(user), token_date: Number(token_date) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    setLoading(true);
    const response = await http.post('auth/login', {
      email,
      password,
    });
    const { token, user, token_date } = response.data;

    localStorage.setItem('Nocturnal:token', token);
    localStorage.setItem('Nocturnal:user', JSON.stringify(user));
    localStorage.setItem('Nocturnal:session-date', JSON.stringify(token_date));
    setData({ token, user, token_date });
    setLoading(false);
  }, []);

  const signOut = useCallback(() => {
    setLoading(true);
    localStorage.removeItem('Nocturnal:token');
    localStorage.removeItem('Nocturnal:user');
    // localStorage.clear();

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
