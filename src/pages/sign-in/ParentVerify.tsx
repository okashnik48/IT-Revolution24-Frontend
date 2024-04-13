import { Button } from "antd";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CoreInput } from "../../ui-kit/CoreInput";

import userService from "../../services/user.service";
import { useNavigate } from "react-router-dom";
type RegistrationProps = {
    checkCode: string;
};

export const CheckCode: FC = () => {
  const navigate = useNavigate()
  const { control, handleSubmit, getValues, setValue } =
    useForm<RegistrationProps>({
      defaultValues: {
        checkCode: "",
      },
    });
  //   const {data, refetch: agaraGydjy} = userService.useVerifyQuery("")
  //     const onSubmit: SubmitHandler<RegistrationProps> = (formData) => {
  //       console.log(formData.checkCode)
  //       agaraGydjy().then(() =>{
  //         navigate("/yra")
  //       }).catch(() =>{
  //         alert("werwer")
  //       })
  //   console.log(formData);
  // };
  const onSubmit: SubmitHandler<RegistrationProps> = (formData) => {}
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
        src="images/check.png"
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
          label="checkCode"
          name="checkCode"
          placeholder="Write your check code"
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
