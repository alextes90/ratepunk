import { caveat_brush } from "@/fonts/Fonts";
import ReferralsInput from "./components/referralsInput/ReferralsInput";
import styles from "./LinkPart.module.scss";
const LinkPart = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div>
          <h2 className={`${caveat_brush.className}`}>
            REFER FRIENDS AND GET REWARDS
          </h2>
          <p>
            Refer your friends to us and earn hotel booking vouchers.
            We&rsquo;ll give you 1 coin for each friend that installs our
            extension. Minimum cash-out at 20 coins.
          </p>
          <ReferralsInput />
        </div>
        <div className={styles.limits}>Limits on max rewards apply.</div>
      </div>
    </div>
  );
};

export default LinkPart;
