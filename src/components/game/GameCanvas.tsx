"use client";

import { useEffect, useRef, useState, useCallback } from "react";
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
  const [isMusicOn, setIsMusicOn] = useState(true); // Estado para controlar la música

  // Utilizar useCallback para evitar recrear la función en cada render
  const initializeGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        startGame(canvas, ctx, setIsGameOver, setScore); // Iniciar la lógica del juego con setScore
        if (audioRef.current && isMusicOn) {
          audioRef.current.play(); // Iniciar la música de fondo si está encendida
        }
      }
    }
  }, [isMusicOn]);

  useEffect(() => {
    if (!showWelcome) {
      initializeGame(); // Solo inicia el juego si la pantalla de bienvenida está oculta
    }
  }, [showWelcome, initializeGame]);

  const handleRetry = () => {
    setIsGameOver(false);
    setScore(0); // Reiniciar el puntaje al reiniciar el juego
    resetGame(
      canvasRef.current!,
      canvasRef.current!.getContext("2d")!,
      setIsGameOver,
      setScore
    );
    if (audioRef.current && isMusicOn) {
      audioRef.current.play(); // Reanudar la música al reiniciar el juego si está encendida
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
    if (audioRef.current && isMusicOn) {
      audioRef.current.play(); // Reanudar la música al continuar si está encendida
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

  const toggleMusic = () => {
    setIsMusicOn((prev) => !prev);
    if (audioRef.current) {
      if (isMusicOn) {
        audioRef.current.pause(); // Pausar la música si estaba encendida
      } else {
        audioRef.current.play(); // Reproducir la música si estaba apagada
      }
    }
  };

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
      <button
        onClick={toggleMusic}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          color: "white",
        }}
      >
        {isMusicOn ? "🔊" : "🔇"}
      </button>
    </BrutalistBox>
  );
}
