import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../pages/sign-in/SignIn";
import { Registration } from "../pages/sign-up/SignUp";
import { CheckCode } from "../pages/sign-in/ParentVerify";
import ChildVerify from "../pages/sign-in/ChildVerify";
import ChildList from "../components/parent/ChildList";
import Game from "../pages/game/Game";
import { CheckUrl } from "./CheckUrl";

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
      element: <ChildVerify />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/:code",
      element: <CheckUrl />,
    },
  ],
  private: {
    parent: [
      {
        path: "*",
        element: <ChildList />,
      },
    ],
    child: [      {
      path: "*",
      element: <Game />,
    },],
  },
};
