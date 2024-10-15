/* eslint-disable @next/next/no-img-element */
// src/app/page.tsx
import Link from "next/link";
import GameRules from "@/components/home/GameRules";

export default function HomePage() {
  return (
    <main className="h-screen w-screen bg-slate-200 p-6">
      <div className="grid grid-rows-[auto,1fr,auto] gap-8 h-full">
        {/* Título */}
        <div className="row-span-1 flex items-center justify-center bg-white shadow-md p-6 rounded-md">
          <h1 className="text-5xl font-bold text-gray-800">Typing Birds!</h1>
        </div>

        {/* Enlaces de Navegación */}
        <div className="row-span-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/game"
            className="relative bg-blue-500 text-white py-8 px-4 text-2xl rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center"
          >
            <p className="font-impact text-slate-50 bg-slate-950 p-2">
              Play Game
            </p>
            <img
              src="/images/home/fb-game.svg"
              alt="Play Game"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
          </Link>
          <Link
            href="/about"
            className="relative bg-green-500 text-white py-8 px-4 text-2xl rounded-lg hover:bg-green-600 transition-all flex items-center justify-center"
          >
            <p className="font-impact text-slate-50 bg-slate-950 p-2">
              About this game and credits.
            </p>
            <img
              src="/images/home/fb-about.svg"
              alt="Play Game"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
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
