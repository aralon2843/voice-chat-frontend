import {
  Form,
  Input,
  FormOffer,
  SubminButton,
  InputWrapper,
  InputError,
} from '../../styles/FormStyles';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';

interface IRegisterInputs {
  email: string;
  username: string;
  password: string;
}

export default function Register(): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
  } = useForm<IRegisterInputs>();

  const [passwordShown, setPasswordShown] = useState(false);

  const onSubmit: SubmitHandler<IRegisterInputs> = (data): void => {};

  const togglePasswordVisibility = (): void => {
    setPasswordShown(passwordShown ? false : true);
  };

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Input
            type="text"
            placeholder="E-mail"
            error={!!errors.email?.message}
            {...register('email', {
              required: 'requiered field',
              pattern: {
                value: emailRegex,
                message: 'incorrect email',
              },
            })}
          />
          {errors.email?.message && (
            <InputError>{errors.email?.message}</InputError>
          )}
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Username"
            error={!!errors.username?.message}
            {...register('username', {
              required: 'requiered field',
              minLength: {
                value: 3,
                message: 'username should be at least 3 characters',
              },
              maxLength: {
                value: 20,
                message: 'username should be no more than 20 characters',
              },
            })}
          ></Input>
          {errors.username?.message && (
            <InputError>{errors.username?.message}</InputError>
          )}
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            placeholder="Password"
            error={!!errors.password?.message}
            {...register('password', {
              required: 'requiered field',
              minLength: {
                value: 8,
                message: 'password should be at least 8 characters',
              },
              maxLength: {
                value: 20,
                message: 'password should be no more than 20 characters',
              },
            })}
          ></Input>
          {errors.password?.message && (
            <InputError>{errors.password?.message}</InputError>
          )}
        </InputWrapper>

        <SubminButton>Register</SubminButton>
      </Form>
      <FormOffer>
        Already have account?
        <Link href="/login">
          <a> Login</a>
        </Link>
      </FormOffer>
    </>
  );
}
