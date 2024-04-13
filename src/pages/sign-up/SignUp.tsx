import { Button, Typography } from "antd";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CoreInput } from "../../ui-kit/CoreInput";

import userService from "../../services/user.service";
import { Link, useNavigate } from "react-router-dom";
import { CoreCheckBox } from "../../ui-kit/CoreCheckBox";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../store/store-hooks";
import { SetState } from "../../store/slices/user";
import AuthContainer from "../../components/auth-container/AuthContainer";
import styles from "./sign-up.module.scss";

type RegistrationProps = {
  username: string;
  role: "parent" | "child";
  email: string;
  password: string;
};
const email =
  /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

const schema = yup.object().shape({
  username: yup.string().required("Enter your username"),
  role: yup.string().required("Choose your role"),
  password: yup.string().required("Enter your password"),
  email: yup.string().matches(email, "Enter a valid url"),
});

export const Registration: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { control, watch, handleSubmit } = useForm<RegistrationProps>({
    defaultValues: {
      username: "",
      role: "parent",
      email: "",
    },
    resolver: yupResolver(schema) as any,
  });

  const [authHandller] = userService.useRegistrationMutation();

  const onSubmit: SubmitHandler<RegistrationProps> = (formData) => {
    authHandller(formData)
      .unwrap()
      .then((data) => {
        dispatch(SetState(data));
        if (formData.role === "parent") navigate("/verify");
        else navigate("/waiting");
      });
  };

  const role = watch("role");

  return (
    <AuthContainer>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Typography.Title level={2}>Sign Up</Typography.Title>
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

        <CoreInput
          control={control}
          size="large"
          label="email"
          name="email"
          placeholder={
            role === "parent" ? "Write your email" : "Write your parent email"
          }
          type="text"
          isAllowClear={true}
          style={{ fontSize: "20px" }}
        />

        <CoreCheckBox
          control={control}
          size="large"
          label="role"
          name="role"
          placeholder="role"
          type="text"
          isAllowClear={true}
          style={{ fontSize: "20px" }}
        />
        <Button type="primary" htmlType="submit">
          Confirm
        </Button>

        <Typography.Paragraph>
          Already have an account? <Link to="/login">Sign In</Link>
        </Typography.Paragraph>
      </form>
    </AuthContainer>
  );
};
