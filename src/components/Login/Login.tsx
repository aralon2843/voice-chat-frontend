import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  FormOffer,
  SubminButton,
  InputError,
  InputWrapper,
  FormWrapper,
} from "../../styles/FormStyles";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authAPI } from "../../services/authService";

interface ILoginInputs {
  username: string;
  password: string;
}

const Login: React.FC = (): JSX.Element => {
  const [loginRequest, { isLoading, isError, isSuccess, data }] =
    authAPI.useLoginMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginInputs>();

  const [passwordShown, setPasswordShown] = useState(false);

  const onSubmit: SubmitHandler<ILoginInputs> = (data): void => {
    loginRequest(data);
  };

  const togglePasswordVisibility = (): void => {
    setPasswordShown(passwordShown ? false : true);
  };

  const navigate = useNavigate();

  useEffect(() => {
    console.log(data);
    if (isSuccess && data?.access_token) {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("currentUserId", data.id);
      navigate(`/user/${data.id}`);
    }
  }, [isSuccess, data]);

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Username"
            error={!!errors.username?.message}
            {...register("username", {
              required: "requiered field",
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
            {...register("password", {
              required: "requiered field",
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
        <Link to="/register"> Join us!</Link>
      </FormOffer>
    </FormWrapper>
  );
};

export default Login;
