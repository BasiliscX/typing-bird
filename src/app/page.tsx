// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container bg-slate-300">
      <h1>Welcome to the Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/game">Go to Game</Link>
          </li>
          <li>
            <Link href="/scores">Go to Scores</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
