import { noto_sans } from "@/fonts/Fonts";
import Image from "next/image";
import { useState } from "react";
import styles from "./ReferralsInput.module.scss";

const BASE_URL = "https://api.jsonbin.io/v3/b/6484a89b8e4aa6225eac3469";

const postEmail = async (string: string) => {
  const response = await fetch(BASE_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key":
        "$2b$10$bjU9GrTy90tfJWS1k4UZBuFSjOU3rEn5GkEiH6aNUBcDWG5ScvD5C",
    },
    body: JSON.stringify({ email: string }),
  });
  console.log(response);
};

const ReferralsInput = () => {
  const [inputVal, setInputVal] = useState("");
  const [isError, setIsError] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    setInputVal(e.target.value);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [, secondPart] = inputVal.split("@");
    const [, thirdPart] = secondPart?.split(".");

    if (
      inputVal.length > 0 &&
      inputVal.includes("@") &&
      thirdPart.length >= 2
    ) {
      await postEmail(inputVal);
      return;
    }

    setIsError(true);
  };

  return (
    <div className={styles.wrapper}>
      {isError ? <span>Error state</span> : ""}
      <form onSubmit={onSubmitHandler}>
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
