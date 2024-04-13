import { Button } from "antd";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CoreInput } from "../../ui-kit/CoreInput";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import userService from "../../services/user.service";

type RegistrationProps = {
  username: string;
  password: string;
};

export const Auth: FC = () => {
  const schema = yup.object().shape({
    username: yup.string().required('Enter your username'),
    password: yup.string().required("Enter your password"),
  });
  const { control, handleSubmit, getValues, setValue } =
    useForm<RegistrationProps>({
      defaultValues: {
        username: "",
        password: ""
      },
      resolver: yupResolver(schema) as any,
    });
  const [authHandller ] = userService.useRegistrationMutation()
  const onSubmit: SubmitHandler<RegistrationProps> = (formData) => {
    //authHandller(formData.phoneNumber);
    console.log(formData)
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src="images/login.png"
        alt="reg"
        style={{ width: "15%", height: "auto", marginBottom: "1%" }}
      />

      <div
        style={{
          display: "flex",
          width: "20%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1%",
        }}
      >
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
      </div>
      <div
        style={{
          display: "flex",
          width: "20%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1%",
        }}
      >
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
      </div>
      <Button
        type="primary"
        htmlType="submit"
        style={{
          marginTop: "1%",
          fontSize: "20px",
          width: "20%",
          height: "50px",
          fontWeight: "bold",
          borderRadius: "10px",
        }}
      >
        Confirm
      </Button>
    </form>
  );
};
