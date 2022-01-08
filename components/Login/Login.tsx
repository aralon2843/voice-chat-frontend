import React, { useState } from 'react';
import {
  Form,
  Input,
  FormOffer,
  SubminButton,
  InputError,
  InputWrapper,
} from '../../styles/FormStyles';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';

interface ILoginInputs {
  username: string;
  password: string;
}

const Login: React.FC = (): JSX.Element => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginInputs>();

  const [passwordShown, setPasswordShown] = useState(false);

  const onSubmit: SubmitHandler<ILoginInputs> = (data): void => {};

  const togglePasswordVisibility = (): void => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Username"
            error={!!errors.username?.message}
            {...register('username', {
              required: 'requiered field',
            })}
          ></Input>
          {errors.username?.message && (
            <InputError>{errors.username?.message}</InputError>
          )}
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder="Password"
            type="password"
            error={!!errors.password?.message}
            {...register('password', {
              required: 'requiered field',
            })}
          ></Input>
          {errors.password?.message && (
            <InputError>{errors.password?.message}</InputError>
          )}
        </InputWrapper>
        <SubminButton type="submit">Login</SubminButton>
      </Form>
      <FormOffer>
        Still not registered?
        <Link href="/register">
          <a> Join us!</a>
        </Link>
      </FormOffer>
    </>
  );
};

export default Login;
