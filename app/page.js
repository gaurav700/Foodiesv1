import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link href="/meals/share">MEALS/SHARE</Link>
      </p>
      <p>
        <Link href="/meals">MEALS</Link>
      </p>
      <p>
        <Link href="/community">COMMUNITY</Link>
      </p>
    </main>
  );
}
