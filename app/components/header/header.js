import logo from "@/assets/logo.png";
import styles from "./header.module.css";
import Image from "next/image";
import NavLink from "./navLink";
import Link from "next/link";
export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src={logo} alt="A plate with food on it" priority />
        NextLevel Food
      </Link>
      <NavLink />
    </header>
  );
}
