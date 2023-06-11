import { caveat_brush } from "@/fonts/Fonts";
import Image from "next/image";
import styles from "./StepPart.module.scss";

const data = [
  {
    header: "INVITE FRIENDS",
    image: "invite",
    p: "Refer friends with your unique referral link.",
  },
  {
    header: "COLLECT COINS",
    image: "collect-coins",
    p: "Get 1 coin for each friend that installs our extension using your referral link.",
  },
  {
    header: "GET VOUCHER",
    image: "voucher",
    p: "Redeem for a $20 hotel booking voucher once you collect 20 coins.",
  },
];
const StepPart = () => {
  return (
    <div className={styles.wrapper}>
      {data.map((step, index) => {
        return (
          <div
            key={step.header}
            className={`${styles.step_container} ${
              index % 2 !== 0 && styles.flex_reverse
            }`}
          >
            <div className={styles.img_container}>
              <Image
                src={`./images/${step.image}.svg`}
                alt={`${step.header}`}
                fill
              />
            </div>
            <div className={styles.description_container}>
              <h4 className={styles.h4}>STEP {index + 1}</h4>
              <h3 className={`${caveat_brush.className} ${styles.h3}`}>
                {step.header}
              </h3>
              <p className={styles.p}>{step.p}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepPart;
