// src/app/page.tsx
import Link from "next/link";
import GameRules from "@/components/home/GameRules";

export default function HomePage() {
  return (
    <main className="h-screen w-screen bg-slate-200 p-6">
      <div className="grid grid-rows-[auto,1fr,auto] gap-8 h-full">
        {/* Título */}
        <div className="row-span-1 flex items-center justify-center bg-white shadow-md p-6 rounded-md">
          <h1 className="text-5xl font-bold text-gray-800">
            Welcome to the Game Page
          </h1>
        </div>

        {/* Enlaces de Navegación */}
        <div className="row-span-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/game"
            className="bg-blue-500 text-white py-8 px-4 text-2xl rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center"
          >
            Go to Game
          </Link>
          <Link
            href="/scores"
            className="bg-green-500 text-white py-8 px-4 text-2xl rounded-lg hover:bg-green-600 transition-all flex items-center justify-center"
          >
            Go to Scores
          </Link>
        </div>

        {/* About Section - Reglas del Juego */}
        <div className="row-span-1 flex items-center justify-center bg-white shadow-md p-6 rounded-md">
          <GameRules />
        </div>
      </div>
    </main>
  );
}
