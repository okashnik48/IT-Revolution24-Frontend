import { Button } from "antd";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CoreInput } from "../../ui-kit/CoreInput";
import { useNavigate } from "react-router-dom";
import "./CheckCode.scss";

type RegistrationProps = {
  checkCode: string;
};

export const CheckCode: FC = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } =
    useForm<RegistrationProps>({
      defaultValues: {
        checkCode: "",
      },
    });

  const onSubmit: SubmitHandler<RegistrationProps> = (formData) => {
    // Your form submission logic here
  };

  return (
    <form className="check-code-form" onSubmit={handleSubmit(onSubmit)}>
      <img
        src="images/check.png"
        alt="reg"
        className="check-code-image"
      />
      <div className="check-code-input">
        <CoreInput
          control={control}
          size="large"
          label="checkCode"
          name="checkCode"
          placeholder="Write your check code"
          type="text"
          isAllowClear={true}
        />
      </div>
      <Button
        type="primary"
        htmlType="submit"
        className="check-code-button"
      >
        Confirm
      </Button>
    </form>
  );
};
