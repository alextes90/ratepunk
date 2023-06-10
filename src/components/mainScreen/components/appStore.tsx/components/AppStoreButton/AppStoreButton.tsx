import { noto_sans } from "@/fonts/Fonts";
import Image from "next/image";
import Link from "next/link";
import styles from "./AppStoreButton.module.scss";

interface AppStoreButtonProps {
  store: string[];
}
const AppStoreButton = ({ store }: AppStoreButtonProps) => {
  const [name, link] = store;
  return (
    <button className={`${styles.container} ${noto_sans.className}`}>
      <Link href={`${link}`}>
        <Image
          src={`./images/${name}.svg`}
          alt={`${name}`}
          width={48}
          height={48}
        />
        <div>
          <div>available in the</div>
          <div className={styles.lower_text}>{`${name} web store`}</div>
        </div>
      </Link>
    </button>
  );
};

export default AppStoreButton;
