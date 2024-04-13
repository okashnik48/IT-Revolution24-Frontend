import { Button } from "antd";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CoreInput } from "../../ui-kit/CoreInput";
import styles from "./sign-in.module.scss";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import userService from "../../services/user.service";
import { Typography } from "antd";
import Image from "../../assets/auth.png";

const AquariumLogo = ({
  primaryColor = "rgb(0,123,255)",
  secondaryColor = "rgb(0,255,255)",
}) => {
  return (
    <svg width="400px" height="100px" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{ stopColor: primaryColor, stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: secondaryColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <text
        fill="url(#grad1)"
        fontFamily="Arial"
        fontSize="30"
        x="10"
        y="40"
        fontWeight="bold"
      >
      </text>
    </svg>
  );
};

type RegistrationProps = {
  username: string;
  password: string;
};

export const Auth: FC = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Enter your username"),
    password: yup.string().required("Enter your password"),
  });
  const { control, handleSubmit, getValues, setValue } =
    useForm<RegistrationProps>({
      defaultValues: {
        username: "",
        password: "",
      },
      resolver: yupResolver(schema) as any,
    });
  const [authHandller] = userService.useRegistrationMutation();
  const onSubmit: SubmitHandler<RegistrationProps> = (formData) => {
    //authHandller(formData.phoneNumber);
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form_wrapper}>
        <Typography.Title level={1} style={{ textAlign: "center" }}>
          Tamagotchi
        </Typography.Title>
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
          <Button type="primary" htmlType="submit">
            Confirm
          </Button>
        </form>
      </div>
      <div className={styles.image_wrapper}>
        <img src={Image} alt="auth" />
      </div>
    </div>
  );
};
