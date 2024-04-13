import React, { useState } from "react";
import { Badge, Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import ModalWarningInfo from "./ModalWarningInfo";
import "./styles/ChildInfo.scss";

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
      <div className="long-card">
        <div className="user-info">
          <div className="username">{child.username}</div>
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
            onClick={() => {
              setIsModalWarningInfo(true);
            }}
            className={child.newMessages.length > 0 ? "warning-button" : ""}
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
      {child.newMessages.length > 0 && (
        <ModalWarningInfo
          isModalWarningInfo={isModalWarningInfo}
          setIsModalWarningInfo={setIsModalWarningInfo}
          warnings={child.newMessages}
        />
      )}
    </>
  );
};