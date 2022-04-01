// eslint-disable-next-line no-use-before-define
import React, { useCallback, useRef } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

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

import { SignInFormData } from '../../interfaces/signIn.interface';

const SingnIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn, setLoading } = useAuth();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Username is required'),
          password: Yup.string().min(6, 'At least 6 digits'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          username: data.username,
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
              'An error occurred while logging in. Invalid username or password',
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
              <Link to="/signup">Sign Up</Link>
            </TextContainer>
            <Input name="username" icon={FiUser} placeholder="Your username" />
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
