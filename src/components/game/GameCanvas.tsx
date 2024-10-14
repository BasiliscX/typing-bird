"use client";

import { useEffect, useRef, useState } from "react";
import { startGame, resetGame } from "./gameLogic"; // Aseguramos que resetGame esté importado
import GameOverMenu from "./GameOverMenu";

export default function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        startGame(canvas, ctx, setIsGameOver); // Iniciar la lógica del juego
      }
    }
  }, []);

  const handleRetry = () => {
    setIsGameOver(false);
    window.location.href = "/"; // Redirigir a la página principal
  };

  const handleContinue = () => {
    setIsGameOver(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        resetGame(canvas, ctx, setIsGameOver); // Reiniciar el juego al hacer clic en Continue
      }
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <canvas ref={canvasRef} width={800} height={600}></canvas>
      {isGameOver && (
        <GameOverMenu onRetry={handleRetry} onContinue={handleContinue} />
      )}
    </div>
  );
}
