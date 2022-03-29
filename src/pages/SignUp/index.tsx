// eslint-disable-next-line no-use-before-define
import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

import { createAccount } from '../../services/user';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';
import {
  Container,
  Content,
  AnimationContainer,
  TextContainer,
} from './styles';

interface SignUpFormData {
  username: string;
  password: string;
  email: string;
}

const SingnUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { setLoading } = useAuth();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Username is required'),
          password: Yup.string().min(6, 'At least 6 digits'),
          email: Yup.string()
            .required('Email is required')
            .email('Enter a valid email address'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await createAccount({
          username: data.username,
          password: data.password,
          email: data.email,
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
            description: 'An error occurred while creating the account',
          });
        }
      }
    },
    [addToast, setLoading]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="nocturnal" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <TextContainer>
              <h1>Sign Up</h1>
              <Link to="/">Already have an account</Link>
            </TextContainer>
            <Input
              name="username"
              icon={FiUser}
              placeholder="Define a username"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Set your password"
            />
            <Input name="email" icon={FiUser} placeholder="Email (optional)" />
            <Button type="submit">Create account</Button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SingnUp;
