import LinkPart from "./components/linkPart/LinkPart";
import StepPart from "./components/stepPart/StepPart";
import styles from "./Referrals.module.scss";
const Referrals = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <LinkPart />
        </div>
        <div>
          <StepPart />
        </div>
      </div>
    </section>
  );
};

export default Referrals;
