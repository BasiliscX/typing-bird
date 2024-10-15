"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; // Importar el hook useRouter
import { startGame, resetGame } from "./gameLogic";
import GameOverMenu from "./GameOverMenu";
import Score from "./Score";
import BrutalistBox from "../box/BrutalistBox";
import WelcomeScreen from "./WelcomeScreen";

export default function GameCanvas() {
  const router = useRouter(); // Hook para la navegación
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true); // Estado para mostrar la pantalla de bienvenida

  const initializeGame = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        startGame(canvas, ctx, setIsGameOver, setScore); // Iniciar la lógica del juego con setScore
      }
    }
  };

  useEffect(() => {
    if (!showWelcome) {
      initializeGame(); // Solo inicia el juego si la pantalla de bienvenida está oculta
    }
  }, [showWelcome]);

  const handleRetry = () => {
    setIsGameOver(false);
    setScore(0); // Reiniciar el puntaje al reiniciar el juego
    router.push("/"); // Redirigir a la página principal
  };

  const handleContinue = () => {
    setIsGameOver(false);
    resetGame(
      canvasRef.current!,
      canvasRef.current!.getContext("2d")!,
      setIsGameOver,
      setScore
    );
  };

  const handleStartGame = () => {
    setShowWelcome(false); // Ocultar la pantalla de bienvenida y empezar el juego
  };

  return (
    <BrutalistBox style={{ position: "relative" }}>
      {showWelcome && <WelcomeScreen onStart={handleStartGame} />}
      <canvas ref={canvasRef} width={800} height={600} />
      <Score score={score} />
      {isGameOver && (
        <GameOverMenu onRetry={handleRetry} onContinue={handleContinue} />
      )}
    </BrutalistBox>
  );
}
