// src/app/home/page.tsx
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Navbar />
      <p>
        This is the main page where you can navigate to the game or view scores.
      </p>
    </div>
  );
}
