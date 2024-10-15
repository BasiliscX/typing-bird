"use client";

import { useEffect, useRef, useState } from "react";
import { startGame, resetGame } from "./gameLogic";
import GameOverMenu from "./GameOverMenu";
import Score from "./Score";
import BrutalistBox from "../box/BrutalistBox";
import WelcomeScreen from "./WelcomeScreen";

export default function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null); // Referencia al audio
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true); // Estado para mostrar la pantalla de bienvenida

  const initializeGame = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        startGame(canvas, ctx, setIsGameOver, setScore); // Iniciar la lógica del juego con setScore
        if (audioRef.current) {
          audioRef.current.play(); // Iniciar la música de fondo al iniciar el juego
        }
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
    resetGame(
      canvasRef.current!,
      canvasRef.current!.getContext("2d")!,
      setIsGameOver,
      setScore
    );
    if (audioRef.current) {
      audioRef.current.play(); // Reanudar la música al reiniciar el juego
    }
  };

  const handleContinue = () => {
    setIsGameOver(false);
    resetGame(
      canvasRef.current!,
      canvasRef.current!.getContext("2d")!,
      setIsGameOver,
      setScore
    );
    if (audioRef.current) {
      audioRef.current.play(); // Reanudar la música al continuar
    }
  };

  const handleStartGame = () => {
    setShowWelcome(false); // Ocultar la pantalla de bienvenida y empezar el juego
  };

  useEffect(() => {
    if (isGameOver && audioRef.current) {
      audioRef.current.pause(); // Pausar la música cuando se acaba el juego
      audioRef.current.currentTime = 0; // Reiniciar la música al comienzo
    }
  }, [isGameOver]);

  return (
    <BrutalistBox style={{ position: "relative" }}>
      {showWelcome && <WelcomeScreen onStart={handleStartGame} />}
      <audio
        ref={audioRef}
        src="/sounds/game/Juhani Junkala [Chiptune Adventures] 1. Stage 1.ogg"
        loop // Repetir en bucle
      />
      <canvas ref={canvasRef} width={800} height={600} />
      <Score score={score} />
      {isGameOver && (
        <GameOverMenu onRetry={handleRetry} onContinue={handleContinue} />
      )}
    </BrutalistBox>
  );
}
