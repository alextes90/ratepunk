import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import Logo from "../../../logo/Logo";
import MenuLinks from "../header/components/menuLinks/MenuLinks";
import styles from "./ModalMenu.module.scss";

interface ModalMenuProps {
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const ModalMenu = ({ setIsModal }: ModalMenuProps) => {
  return (
    <div className={`${styles.container}`}>
      <header>
        <div className={styles.upper_container}>
          <Logo />
          <div>
            <button
              onClick={() => {
                setIsModal(false);
              }}
            >
              <Image
                src='./images/close.svg'
                alt='close'
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
        <nav>
          <MenuLinks />
        </nav>
      </header>
    </div>
  );
};

export default ModalMenu;
