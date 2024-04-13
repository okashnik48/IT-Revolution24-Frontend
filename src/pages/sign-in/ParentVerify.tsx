import { Button } from "antd";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CoreInput } from "../../ui-kit/CoreInput";
import "./CheckCode.scss";
import userService from "../../services/user.service";
import { useAppDispatch } from "../../store/store-hooks";
import { SetIsRegistered } from "../../store/slices/user";

type RegistrationProps = {
  checkCode: string;
};

export const CheckCode: FC = () => {
  const dispatch = useAppDispatch()
  const { control, handleSubmit } =
    useForm<RegistrationProps>({
      defaultValues: {
        checkCode: "",
      },
    });

    const [verifyCodeHandller] = userService.useVerifyCodeMutation();

  const onSubmit: SubmitHandler<RegistrationProps> = (formData) => {
    verifyCodeHandller(parseInt(formData.checkCode)).then(() =>{
      dispatch(SetIsRegistered(true))
    })
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
