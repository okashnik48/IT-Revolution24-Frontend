import { Button } from "antd";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CoreInput } from "../../ui-kit/CoreInput";

import userService from "../../services/user.service";
import { useNavigate } from "react-router-dom";
import { CoreCheckBox } from "../../ui-kit/CoreCheckBox";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type RegistrationProps = {
  username: string;
  role: string;
  email: string;
  password: string;
};

export const Registration: FC = () => {
  const navigate = useNavigate()
  const email =
  /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

const schema = yup.object().shape({
  username: yup.string().required('Enter your username'),
  role: yup.string().required('Choose your role'),
  password: yup.string().required("Enter your password"),
  email: yup.string().matches(email, "Enter a valid url"),
});
  const { control, handleSubmit, getValues, setValue } =
    useForm<RegistrationProps>({
      defaultValues: {
        username: "",
        role: "parent",
        email: "",
      },
      resolver: yupResolver(schema) as any,
    });
    const [authHandller, data ] = userService.useRegistrationMutation()
  const onSubmit: SubmitHandler<RegistrationProps> = (formData) => {
    // authHandller({phone: formData.phoneNumber, username: formData.username})
    console.log(formData);
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
        src="images/registration.png"
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
          minHeight: "5%",
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
          height: "5%",
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
      <div
        style={{
          display: "flex",
          width: "20%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1%",
          height: "5%",
        }}
      >
        {/* Додати ререндер при змін */}
        <CoreInput
          control={control}
          size="large"
          label="email"
          name="email"
          placeholder={getValues("role") === "parent"? "Write your email" : "Write your parent email"}
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
          height: "5%",
        }}
      >
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
