import React, { PropsWithChildren } from "react";
import styles from "./auth-container.module.scss";
import Image from "../../assets/logo.png";
import { Typography } from "antd";

function AuthContainer({ children }: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <div className={styles.form_wrapper}>
        <Typography.Title level={1} style={{ textAlign: "center" }}>
          Tamagotchi
        </Typography.Title>
        {children}
      </div>
      <div className={styles.image_wrapper}>
        <img className={styles.img} src={Image} alt="auth" />
      </div>
    </div>
  );
}

export default AuthContainer;
