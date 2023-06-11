import Image from "next/image";
import { useState } from "react";
import Logo from "../../../logo/Logo";
import MenuLinks from "./components/menuLinks/MenuLinks";
import ModalMenu from "../modalMenu/ModalMenu";
import styles from "./Header.module.scss";
import { RemoveScroll } from "react-remove-scroll";

export const Header = () => {
  const [isModal, setIsModal] = useState(false);

  if (isModal) {
    return (
      <RemoveScroll>
        <ModalMenu setIsModal={setIsModal} />
      </RemoveScroll>
    );
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav>
          <Logo />
          <div className={styles.burger_menu}>
            <button
              onClick={() => {
                setIsModal(true);
              }}
            >
              <Image
                src={"./images/menu.svg"}
                alt='logo'
                height={16}
                width={18}
              />
            </button>
          </div>
          <MenuLinks />
        </nav>
      </div>
    </header>
  );
};
