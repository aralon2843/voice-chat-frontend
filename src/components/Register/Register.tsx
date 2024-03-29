import {
  Form,
  Input,
  FormOffer,
  SubminButton,
  InputWrapper,
  InputError,
  FormWrapper,
} from "../../styles/FormStyles";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authAPI } from "../../services/authService";

interface IRegisterInputs {
  email: string;
  username: string;
  password: string;
}

const Register: React.FC = () => {
  const [registerRequest, { isError, isLoading, isSuccess }] =
    authAPI.useRegisterMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IRegisterInputs>();

  const [passwordShown, setPasswordShown] = useState(false);

  const onSubmit: SubmitHandler<IRegisterInputs> = (data): void => {
    registerRequest(data);
  };

  const togglePasswordVisibility = (): void => {
    setPasswordShown(passwordShown ? false : true);
  };

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const navigate = useNavigate();

  useEffect(() => {
    isSuccess && navigate("/login");
  }, [isSuccess]);

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Input
            type="text"
            placeholder="E-mail"
            error={!!errors.email?.message}
            {...register("email", {
              required: "requiered field",
              pattern: {
                value: emailRegex,
                message: "incorrect email",
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
            {...register("username", {
              required: "requiered field",
              minLength: {
                value: 3,
                message: "username should be at least 3 characters",
              },
              maxLength: {
                value: 20,
                message: "username should be no more than 20 characters",
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
            {...register("password", {
              required: "requiered field",
              minLength: {
                value: 8,
                message: "password should be at least 8 characters",
              },
              maxLength: {
                value: 20,
                message: "password should be no more than 20 characters",
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
        Already have an account?
        <Link to="/login"> Login</Link>
      </FormOffer>
    </FormWrapper>
  );
};

export default Register;
