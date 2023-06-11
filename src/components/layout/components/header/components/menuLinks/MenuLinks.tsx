import Link from "next/link";
import styles from "./MenuLinks.module.scss";

const MenuLinks = () => {
  return (
    <ul className={styles.container}>
      <li>
        <Link href='https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk'>
          Chrome Extension
        </Link>
      </li>
      <li>
        <Link href=''>Price Comparison</Link>
      </li>
      <li>
        <Link href=''>Blog</Link>
      </li>
    </ul>
  );
};

export default MenuLinks;
