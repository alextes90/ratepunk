import { noto_sans } from "@/fonts/Fonts";
import Image from "next/image";
import { useState } from "react";
import styles from "./ReferralsInput.module.scss";

const ReferralsInput = () => {
  const [inputVal, setInputVal] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <form>
        <Image src='./images/email.svg' alt='email' width={20} height={16} />
        <input
          type='email'
          placeholder='Enter your email address'
          className={` ${noto_sans.className}`}
          value={inputVal}
          onChange={onChangeHandler}
        />
        <button className={` ${noto_sans.className}`}>Get Referral Link</button>
      </form>
    </div>
  );
};

export default ReferralsInput;
