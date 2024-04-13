"use client";

import React from "react";

import { Modal, Button, Form, Input, Select } from "antd";

const ModalWarningInfo = ({
  isModalWarningInfo,
  setIsModalWarningInfo,
  warnings,
}: any) => {

    console.log(warnings)
  return (
    <Modal
      visible={isModalWarningInfo}
      onCancel={() => setIsModalWarningInfo(false)}
      footer={null}
      width={600}
    >
      <h2 style={{ textAlign: "center" }}>Warnings</h2>
      {warnings.map((warning: string, index: number) => {
        return<div
        key = {index}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            margin: "5px 0",
            fontSize: "25px",
          }}
        >{warning}</div>;
      })}
    </Modal>
  );
};
export default ModalWarningInfo;
