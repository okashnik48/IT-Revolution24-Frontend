"use client";

import React, { useEffect, useState } from "react";

import { Button, Col, Empty, Input, Row } from "antd";
import { ChildInfo } from "./ChildInfo";
import { io } from "socket.io-client";
import parentService from "../../services/parent.service";
import { toast } from "react-toastify";
import { color } from "@mui/system";
import { IconButton } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { serviceApi } from "../../services/app.service";
import { SetTokens, SetUserInfo } from "../../store/slices/user";
import {useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store-hooks";
const ChildList = () => {
  const socket = io("https://waisys.dev.m0e.space/", {
    transports: ["websocket"],
  });

  const [isConnected, setIsConnected] = useState(socket.connected);
  const { data: arrayOfChildren, refetch: getArrayOfChildren } =
    parentService.useGetChildrensQuery(null);

  console.debug(arrayOfChildren);

  useEffect(() => {
    function onConnect() {
      console.log("Connect");
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("kid.warning", (warning) => {
      toast.info(warning);
      getArrayOfChildren();
    });

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("cook.orders.create", () => {
        getArrayOfChildren();
      });
    };
  }, []);
  // const arrayOfChildren = [
  //     {
  //       id: "1",
  //       money: 100,
  //       aliveFishCount: 5,
  //       deadFishCount: 2,
  //       starvingFishCount: 3,
  //       password: "password1",
  //       username: "user1",
  //       newMessages : ["232344", "234234"]
  //     },
  //     {
  //       id: "2",
  //       money: 200,
  //       aliveFishCount: 3,
  //       deadFishCount: 1,
  //       starvingFishCount: 1,
  //       password: "password2",
  //       username: "user2",
  //       newMessages : ["234", "234"]
  //     },
  //     {
  //       id: "3",
  //       money: 300,
  //       aliveFishCount: 7,
  //       deadFishCount: 0,
  //       starvingFishCount: 2,
  //       password: "password3",
  //       username: "user3",
  //       newMessages: []
  //     }
  //   ];
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = () =>{
    dispatch(SetTokens({accessToken: "", refreshToken: ""}))
    dispatch(SetUserInfo({
      id: 0,
      createdAt: new Date(),
      name: "",
      email: "",
      isRegistered: false,
      role: "",
    }))
    navigate("/login");
    localStorage.clear()
    dispatch(serviceApi.util.resetApiState());
}
  if (arrayOfChildren === null || arrayOfChildren === undefined) {
    return (
      <>
        <Row>
          <Col md={{ span: 12, offset: 6 }}>
            <h1 style={{textAlign: "center"}}>Child list</h1>
            <Empty />
          </Col>
        </Row>
      </>
    );
  }
  return (
    <>
      <Row>
        <Col md={{ span: 12, offset: 6 }}>
          <h1 style={{textAlign: "center"}}>Child list</h1>
          <IconButton
                    color="warning"
                    aria-label="send-button"
                    onClick={logout}
                  >
                    <LogoutIcon />
                  </IconButton>
          {arrayOfChildren.map((post, index) => (
            <ChildInfo key={post.id} child={post} />
          ))}
        </Col>
      </Row>
    </>
  );
};
export default ChildList;
