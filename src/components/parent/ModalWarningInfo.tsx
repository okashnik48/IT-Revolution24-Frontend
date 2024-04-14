import React from "react";
import { Modal } from "antd";
import "./styles/ModalWarningInfo.scss";

const ModalWarningInfo = ({
  isModalWarningInfo,
  setIsModalWarningInfo,
  warnings,
}: any) => {
  return (
    <Modal
      visible={isModalWarningInfo}
      onCancel={() => setIsModalWarningInfo(false)}
      footer={null}
      width={600}
      className="modal-warning-info"
    >
      <h2>Warnings</h2>
      {warnings.map((warning: any, index: number) => (
        <div key={index} className="warning-item">
          {warning.data}
        </div>
      ))}
    </Modal>
  );
};

export default ModalWarningInfo;
