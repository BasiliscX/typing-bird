// src/app/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/game">Game</Link>
        </li>
        <li>
          <Link href="/scores">Scores</Link>
        </li>
      </ul>
    </nav>
  );
}
