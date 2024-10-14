"use client";

import { useEffect, useRef, useState } from "react";
import { startGame, resetGame } from "./gameLogic";
import GameOverMenu from "./GameOverMenu";
import Score from "./Score"; // Importar el componente Score

export default function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0); // Estado para el puntaje

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        startGame(canvas, ctx, setIsGameOver, setScore); // Iniciar la lógica del juego con setScore
      }
    }
  }, []);

  const handleRetry = () => {
    setIsGameOver(false);
    setScore(0); // Reiniciar el puntaje al reiniciar el juego
    window.location.href = "/"; // Redirigir a la página principal
  };

  const handleContinue = () => {
    setIsGameOver(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        resetGame(canvas, ctx, setIsGameOver, setScore); // Reiniciar el juego con setScore
      }
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <canvas ref={canvasRef} width={800} height={600} />
      <Score score={score} /> {/* Mostrar puntaje */}
      {isGameOver && (
        <GameOverMenu onRetry={handleRetry} onContinue={handleContinue} />
      )}
    </div>
  );
}
