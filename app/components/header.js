import Link from "next/link";
import logo from "@/assets/logo.png";
export default function Header() {
  return (
    <header>
      <Link href="/">
        <img src={logo.src} alt="A plate with food on it" />
        NextLevel Food
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Browse Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
