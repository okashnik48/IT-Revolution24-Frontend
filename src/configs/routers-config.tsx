import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../pages/sign-in/SignIn";
import { Registration } from "../pages/sign-up/SignUp";
import { CheckCode } from "../pages/sign-in/ParentVerify";
import WaitVerify from "../pages/sign-in/ChildVerify";

function NotFound() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/login");
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button onClick={onClick} type="primary">
          Back Home
        </Button>
      }
    />
  );
}

export const ROUTES_CONFIG = {
  public: [
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/login",
      element: <Auth />,
    },
    {
      path: "/verify",
      element: <CheckCode />,
    },
    {
      path: "/waiting",
      element: <WaitVerify />,
    },
    {
      path: "*",
      element: <Registration />,
    },
  ],
  private: {
    parent: [
      {
        path: "*",
        element: <></>,
      },
    ],
    child: [      {
      path: "*",
      element: <></>,
    },],
  },
};
