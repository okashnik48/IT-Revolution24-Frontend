import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import userService from "../services/user.service";
import { SetIsRegistered } from "../store/slices/user";
import { useAppDispatch } from "../store/store-hooks";
import { Result, Spin } from "antd";
import Preloader from "../components/preloader/Preloader";

export const CheckUrl = () => {
  const { code } = useParams();
  const dispatch = useAppDispatch();

  const [verifyCodeHandler, { isError, isLoading }] =
    userService.useVerifyCodeMutation();

  useEffect(() => {
    verifyCodeHandler(parseInt(code as string)).then(() => {
      dispatch(SetIsRegistered(true));
    });
  }, []);

  if (isLoading) return <Preloader />;

  if (isError) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, you are not authorized to access this page."
      />
    );
  }

  return (
    <Result
      status="success"
      title="Success"
      subTitle="Your account has been successfully verified."
    />
  );
};
