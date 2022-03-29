// eslint-disable-next-line no-use-before-define
import React, { useCallback, useRef } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Content,
  AnimationContainer,
  TextContainer,
} from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignInFormData {
  email: string;
  password: string;
}

const SingnIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn, setLoading } = useAuth();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          setLoading(false);
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        } else {
          setLoading(false);
          addToast({
            type: 'error',
            title: 'Error',
            description:
              'Ocorreu um erro ao realizar o login. E-mail ou senha inválidos',
          });
        }
      }
    },
    [signIn, addToast, setLoading]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="nocturnal" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <TextContainer>
              <h1>Sign in</h1>
              <a href="#">Sign Up</a>
            </TextContainer>
            <Input name="email" icon={FiUser} placeholder="Your username" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Your password"
            />
            <Button type="submit">Log in</Button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SingnIn;
