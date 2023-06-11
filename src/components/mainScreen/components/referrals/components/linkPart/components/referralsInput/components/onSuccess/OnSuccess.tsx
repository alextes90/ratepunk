import { noto_sans } from "@/fonts/Fonts";
import Image from "next/image";
import { useState } from "react";
import styles from "./OnSuccess.module.scss";

const OnSuccess = () => {
  const [isCopied, setIsCopied] = useState(false);
  const refValue = "https://ratepunk.com/referral";
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(refValue);
    setIsCopied(true);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.success_container}>
        <div className={styles.img_container}>
          <Image src='./images/success.svg' alt='onSuccess' fill />
        </div>
        <p>{isCopied ? "Copied!" : "Your email is confirmed"}</p>
      </div>
      <form className={styles.form}>
        <input
          disabled
          value={refValue}
          className={`${styles.referral_input} ${noto_sans.className}`}
        />
        <button onClick={onClickHandler} className={styles.copy_button}>
          <span className={styles.fullscreen}>Copy</span>
          <span className={styles.mobile_screen}>Copy URL</span>
        </button>
      </form>
    </div>
  );
};

export default OnSuccess;
