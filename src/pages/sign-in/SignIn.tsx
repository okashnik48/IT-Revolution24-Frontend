import { Button } from "antd";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CoreInput } from "../../ui-kit/CoreInput";
import styles from "./sign-in.module.scss";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Typography } from "antd";
import Image from "../../assets/auth.png";

import userService from "../../services/user.service";
import { SetUserInfo, SetTokens } from "../../store/slices/user";
import { useAppDispatch } from "../../store/store-hooks";
import { Link } from "react-router-dom";
import AuthContainer from "../../components/auth-container/AuthContainer";


type RegistrationProps = {
  username: string;
  password: string;
};

export const Auth: FC = () => {
  const dispatch = useAppDispatch();
  const schema = yup.object().shape({
    username: yup.string().required("Enter your username"),
    password: yup.string().required("Enter your password"),
  });
  const { control, handleSubmit } =
    useForm<RegistrationProps>({
      defaultValues: {
        username: "",
        password: "",
      },
      resolver: yupResolver(schema) as any,
    });
  const [authHandller] = userService.useLoginMutation();

  const [getUserInfoHandler] = userService.useLazyGetUserInfoQuery();

  const onSubmit: SubmitHandler<RegistrationProps> = (formData) => {
    authHandller(formData)
      .unwrap()
      .then((data) => {
        dispatch(SetTokens(data.tokens));
        console.log("$56456")
        localStorage.setItem(
          "tokens",
          JSON.stringify(data.tokens)
        );
        getUserInfoHandler(null).unwrap().then((value) => {
          dispatch(SetUserInfo(value))
        })
      }).catch(() =>{
        console.log("33333333")
      })
  };

  return (
    <AuthContainer>
    
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Typography.Title level={2}>Sign In</Typography.Title>
          <CoreInput
            control={control}
            size="large"
            label="username"
            name="username"
            placeholder="Write your username"
            type="text"
            isAllowClear={true}
            style={{ fontSize: "20px" }}
          />

          <CoreInput
            control={control}
            size="large"
            label="password"
            name="password"
            placeholder="Write your password"
            type="text"
            isAllowClear={true}
            style={{ fontSize: "20px" }}
          />
          <Button
            type="primary"
            htmlType="submit"
            style={{ height: "50px", fontSize: "17px" }}
          >
            Confirm
          </Button>

          <Typography.Paragraph>
            Don't have an account? <Link to="/registration">Sign Up</Link>
          </Typography.Paragraph>
        </form>
    </AuthContainer>
  );
};
