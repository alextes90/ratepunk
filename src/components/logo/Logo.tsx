import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href='#'>
      <Image src='./images/logo.svg' alt='logo' height={32} width={125} />
    </Link>
  );
};

export default Logo;
