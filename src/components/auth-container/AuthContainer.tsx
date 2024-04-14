import React, { PropsWithChildren } from "react";
import styles from "./auth-container.module.scss";
import Image from "../../assets/logo.png";

function AuthContainer({ children }: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <div className={styles.form_wrapper}>
        {children}
      </div>
      <div className={styles.image_wrapper}>
        <img className={styles.img} src={Image} alt="auth" />
      </div>
    </div>
  );
}

export default AuthContainer;
