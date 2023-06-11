import { noto_sans } from "@/fonts/Fonts";
import Image from "next/image";
import { useState } from "react";
import { useMutation } from "react-query";
import OnSuccess from "./components/onSuccess/OnSuccess";
import styles from "./ReferralsInput.module.scss";
import { postEmail } from "./utils";

const ReferralsInput = () => {
  const mutation = useMutation({
    mutationFn: (email: string) => {
      return postEmail(email);
    },
  });
  const [inputVal, setInputVal] = useState("");
  const [isError, setIsError] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    setInputVal(e.target.value);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [, secondPart] = inputVal?.split("@");
    if (!secondPart) {
      setIsError(true);
      return;
    }
    const [, thirdPart] = secondPart?.split(".");

    if (
      inputVal?.length > 0 &&
      inputVal.includes("@") &&
      thirdPart?.length >= 2
    ) {
      mutation.mutate(inputVal);
      return;
    }

    setIsError(true);
  };

  return (
    <div className={styles.wrapper}>
      {isError ? <span className={styles.error_state}>Error state</span> : ""}
      {mutation.isError && (
        <p className={styles.async_error}>
          Failed to send email. Please try again latter. And refresh the page
        </p>
      )}
      {mutation.isSuccess ? (
        <OnSuccess />
      ) : (
        <form
          onSubmit={onSubmitHandler}
          className={`${styles.form} ${mutation.isLoading && styles.inactive}`}
          noValidate
        >
          <Image src='./images/email.svg' alt='email' width={20} height={16} />
          <input
            type='email'
            placeholder='Enter your email address'
            className={`${styles.email_input} ${noto_sans.className}`}
            value={inputVal}
            onChange={onChangeHandler}
          />
          <button
            disabled={mutation.isLoading}
            className={`${noto_sans.className} ${styles.submit_button} ${
              mutation.isLoading && styles.inactive
            }`}
          >
            Get Referral Link
          </button>
        </form>
      )}
    </div>
  );
};

export default ReferralsInput;
