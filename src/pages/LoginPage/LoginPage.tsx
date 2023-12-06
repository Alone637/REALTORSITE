import React, { useState } from "react";
import { LinkButton } from "../../components/UI/AppButton/LinkButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Heading } from "../../typography/Heading";
import { LoginPageWrapper } from "./LoginPageWrapper";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import { setUser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { Registration } from "../../components/UI/Login/Login";
import "./LoginPage.scss"

interface LoginPageForm {
  userPhone: string;
  userPassword: string;
}

const uzbekPhoneNumberRegex = /^(\+998)?(9\d{8}|[12]\d{11})$/;

const loginFormSchema = yup.object({
  userPhone: yup
    .string()
    .matches(uzbekPhoneNumberRegex, "Неверный формат номера телефона")
    .required("Это обязательное поле"),
  userPassword: yup
    .string()
    .min(8, "Пароль должен составлять 8 символов и более")
    .required("Это обязательное поле"),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPageForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      userPhone: "",
      userPassword: "",
    },
  });

  const navigate = useNavigate()

  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state: RootState) => state.auth.user);

  const onLoginSubmit = (data: LoginPageForm) => {
    dispatch(setUser({ userphone: "998990000000" }));
    navigate('/main')
  };

  return (
    <div className="cont">
    <LoginPageWrapper>
      <Heading type="h1" headingText="Авторизация" />
      {currentUser?.userphone && (
        <Heading type="h2" headingText={currentUser?.userphone} />
      )}
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        <Controller
          name="userPhone"
          control={control}
          render={({ field }) => (
            <AppInput
              type="tel"
              placeholder="Номер телефона"
              errorText={errors.userPhone?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="userPassword"
          control={control}
          render={({ field }) => (
            <AppInput
              type="password"
              placeholder="Пароль"
              errorText={errors.userPassword?.message}
              {...field}
            />
          )}
        />
        <LinkButton type="submit" buttonLabel="Войти" isPrimary />
      </form>
      <a href="#">Забыли пароль?</a>
      <Registration />
    </LoginPageWrapper>
    </div>
  );
};
