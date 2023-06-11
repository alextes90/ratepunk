import Image from "next/image";
import Link from "next/link";
import Logo from "../../../logo/Logo";
import Signature from "./components/siganture/Signature";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <div className={styles.container_description}>
          <span>
            <Logo />
          </span>
          <p className={styles.container_description__paragraph}>
            Ratepunk compares hotel room prices across the major online travel
            agencies. When you search for a room, Ratepunk extension scans the
            top booking sites and runs a price comparison, so you can be
            confident in knowing you’re getting the best deal!
          </p>
          <div className={styles.fullscreen}>
            <Signature />
          </div>
        </div>
        <div className={styles.container_flex}>
          <h3 className={styles.h3}>QUICK LINKS</h3>
          <ul className={styles.container_links}>
            <li>
              <Link href=''>Price Comparison</Link>
            </li>
            <li>
              <Link href=''>Chrome Extension</Link>
            </li>
            <li>
              <Link href=''>How it Works</Link>
            </li>
            <li>
              <Link href=''>Ratepunk Blog</Link>
            </li>
            <li>
              <Link href=''>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className={styles.container_flex}>
          <div>
            <h3 className={styles.h3}>Contact</h3>
            <div>
              <Image
                src='./images/email-footer.svg'
                alt='email-logo'
                width={16}
                height={6}
              />
              <span className={styles.email}>hi@ratepunk.com</span>
            </div>
          </div>
          <div>
            <h3 className={styles.h3}>Social</h3>
            <ul className={styles.social_container}>
              {["instagram", "facebook", "linkedin", "twitter", "tiktok"].map(
                (social) => {
                  return (
                    <li key={`${social}`}>
                      <Link href=''>
                        <div className={styles.social_container_item}>
                          <div className={styles.div}>
                            <Image
                              src={`./images/${social}.svg`}
                              alt={`${social}`}
                              fill
                            />
                          </div>
                        </div>
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
        <div className={styles.mobilescreen}>
          <Signature />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
