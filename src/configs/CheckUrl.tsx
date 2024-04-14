import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userService from "../services/user.service";
import { SetIsRegistered } from "../store/slices/user";
import { useAppDispatch } from "../store/store-hooks";
import { Button, Result, Spin } from "antd";
import Preloader from "../components/preloader/Preloader";

export const CheckUrl = () => {
  const { code } = useParams();
  const dispatch = useAppDispatch();
const navigate = useNavigate(); 

  const [verifyCodeHandler, { isError, isLoading }] =
    userService.useVerifyCodeMutation();
  useEffect(() => {
    verifyCodeHandler(parseInt(code as string)).then(() => {
      dispatch(SetIsRegistered(true));
    });
  }, []);

  if (isLoading) return (<div style = {{backgroundColor: "white"}}>
    <Preloader />
    </div>);
    const onClick = () => {
      navigate("/login");
    };
  if (isError) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button onClick={onClick} type="primary" style={{ marginLeft: "10px", backgroundColor: "white", color: "black", borderRadius: "15px", fontSize: "20px", height: "auto" }}>
            Back to Mini Link
          </Button>
        }
      />
    );
  }

  return (
    <Result
      status="success"
      title="Success"
      subTitle="Your account has been successfully verified."
      extra={
        <Button onClick={onClick} type="primary" style={{ marginLeft: "10px", backgroundColor: "white", color: "black", borderRadius: "15px", fontSize: "20px", height: "auto" }}>
          Back to Mini Link
        </Button>
      }
    />
  );
};
