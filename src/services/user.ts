import http from './api';

interface CreateAccountFormData {
  username: string;
  password: string;
  email: string;
}

const createAccount = async (dataForm: CreateAccountFormData) =>
  await http.post('auth/signup', {
    username: dataForm.username,
    password: dataForm.password,
    email: dataForm.email,
  });

export { createAccount };
