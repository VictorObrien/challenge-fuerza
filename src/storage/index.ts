/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const USER_KEY = '@Nocturnal:user';
const TOKEN_KEY = '@Nocturnal:token';

interface StorageTypes {
  user: object;
  token: string;
  classe: object;
  grade: object;
}

const setStorageUser = ({ user }: StorageTypes) => {
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
};

const getStorageUser = () => {
  const user = localStorage.getItem(USER_KEY);
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

const setStorageToken = ({ token }: StorageTypes) => {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  }
};

const getStorageToken = () => {
  return localStorage.getItem('@Nocturnal:token');
};

const setClearStorage = () => {
  localStorage.setItem(TOKEN_KEY, '');
  localStorage.setItem(USER_KEY, '');
};

export {
  setStorageToken,
  setStorageUser,
  getStorageToken,
  getStorageUser,
  setClearStorage,
};
