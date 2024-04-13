import React, { useState } from "react";
import { Badge, Button, FloatButton } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import ModalWarningInfo from "./ModalWarningInfo";

type Props = {
  child: {
    id: string;
    money: number;
    aliveFishCount: number;
    deadFishCount: number;
    starvingFishCount: number;
    password: string;
    username: string;
    newMessages: string[];
  };
};

export const ChildInfo = ({ child }: Props) => {
  const [isModalWarningInfo, setIsModalWarningInfo] = useState<boolean>(false);
  const DeleteUserHandler = (id: string) => {
    console.log(id);
  };
  return (
    <>
      <div
        className="long-card"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          margin: "5px 0",
          fontSize: "25px",
        }}
      >
        <div className="user-info" style={{ marginRight: "20px" }}>
          <div className="username" style={{ fontWeight: "bold" }}>
            {child.username}
          </div>
          <div className="money">Money: {child.money}</div>
        </div>
        <div className="fish-counts">
          <div>Alive Fish Count: {child.aliveFishCount}</div>
          <div>Dead Fish Count: {child.deadFishCount}</div>
          <div>Starving Fish Count: {child.starvingFishCount}</div>
        </div>
        <Badge count={child.newMessages.length}>
          <Button
            icon={<CheckOutlined />}
            type="primary"
            style={{
              backgroundColor:
                child.newMessages.length === 0 ? "green" : "gray",
              borderRadius: "50%",
            }}
            onClick={() => {
                setIsModalWarningInfo(true)
            }}
          />
        </Badge>

        <Button
          type="primary"
          danger
          onClick={(e) => {
            DeleteUserHandler(child.id);
          }}
        >
          DELETE
        </Button>
      </div>
      {child.newMessages.length > 0 &&<ModalWarningInfo isModalWarningInfo = {isModalWarningInfo} setIsModalWarningInfo = {setIsModalWarningInfo} warnings = {child.newMessages}/>} 
    </>
  );
};
