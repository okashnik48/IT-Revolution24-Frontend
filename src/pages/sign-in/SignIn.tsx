import { Button } from "antd";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CoreInput } from "../../ui-kit/CoreInput";
import styles from "./sign-in.module.scss";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import userService from "../../services/user.service";
import { Typography } from "antd";


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
    <div className={styles.form_wrapper}>
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
      <div>
        <img src="../../assets/auth.webp" alt="" />
      </div>
    </div>
  );
};
