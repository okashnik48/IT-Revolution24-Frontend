import React, { useState } from "react";
import { Badge, Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import ModalWarningInfo from "./ModalWarningInfo";
import "./styles/ChildInfo.scss";

type Props = {
  child:{
      id: number;
      email: string;
      name: string;
      newMessages: string[];
      password: string;
      alivePetsCount: number;
      balance: number;
      starvingPetsCount: number;
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
          <div className="username">{child.name}</div>
          <div className="money">Money: {child.balance}</div>
        </div>
        <div className="fish-counts">
          <div>Alive Fish Count: {child.alivePetsCount}</div>
          <div>Starving Fish Count: {child.starvingPetsCount}</div>
          <div>Password: {child.password}</div>
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
            DeleteUserHandler(child.id.toString());
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