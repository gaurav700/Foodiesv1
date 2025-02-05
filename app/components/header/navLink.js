"use client";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
import Link from "next/link";

export default function NavLink() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link
            href="/meals"
            className={path.startsWith("/meals") ? styles.active : undefined}
          >
            Browse Meals
          </Link>
        </li>
        <li>
          <Link
            href="/community"
            className={path === "/community" ? styles.active : undefined}
          >
            Browse Community
          </Link>
        </li>
      </ul>
    </nav>
  );
}
