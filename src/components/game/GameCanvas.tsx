"use client";

import { useEffect, useRef, useState } from "react";
import { resetGame } from "./gameLogic";
import { useAudioControl, useInitializeGame } from "./hooks/GameCanvas.hook";
import GameOverMenu from "./GameOverMenu";
import Score from "./Score";
import BrutalistBox from "../box/BrutalistBox";
import WelcomeScreen from "./WelcomeScreen";
import MusicToggleButton from "./components/MusicToggleButton";
import VirtualKeyboard from "./components/VirtualKeyboard";

export default function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isMusicOn, setIsMusicOn] = useState(true);
  const [canvasSize, setCanvasSize] = useState({
    width: 800,
    height: 600,
  });

  const toggleMusic = useAudioControl(isMusicOn, audioRef);
  const initializeGame = useInitializeGame(
    canvasRef,
    audioRef,
    isMusicOn,
    setIsGameOver,
    setScore
  );

  // Define `handleVirtualKeyPress`
  const handleVirtualKeyPress = (key: string) => {
    const event = new KeyboardEvent("keydown", { key });
    window.dispatchEvent(event);
  };

  // Update canvas size based on window size (only on the client)
  useEffect(() => {
    const updateCanvasSize = () => {
      const width = Math.min(window.innerWidth * 0.9, 800);
      const height = Math.min(window.innerHeight * 0.7, 600); // El canvas ocupará el 70% de la pantalla
      setCanvasSize({ width, height });
    };

    if (typeof window !== "undefined") {
      updateCanvasSize();
      window.addEventListener("resize", updateCanvasSize);

      return () => window.removeEventListener("resize", updateCanvasSize);
    }
  }, []);

  useEffect(() => {
    if (!showWelcome) {
      initializeGame();
    }
  }, [showWelcome, initializeGame]);

  useEffect(() => {
    if (isGameOver && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isGameOver]);

  const handleRetry = () => {
    setIsGameOver(false);
    setScore(0);
    window.location.href = "/";
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
      audioRef.current.play();
    }
  };

  const handleStartGame = () => setShowWelcome(false);

  return (
    <BrutalistBox
      style={{ position: "relative" }}
      className="h-screen flex flex-col"
    >
      {showWelcome && <WelcomeScreen onStart={handleStartGame} />}
      <audio
        ref={audioRef}
        src="/sounds/game/Juhani Junkala [Chiptune Adventures] 1. Stage 1.ogg"
        loop
      />

      <div className="flex-1 flex items-center justify-center">
        <canvas
          ref={canvasRef}
          width={canvasSize.width}
          height={canvasSize.height}
          className="w-full h-auto max-w-full"
        />
      </div>

      <Score score={score} />
      {isGameOver && (
        <GameOverMenu onRetry={handleRetry} onContinue={handleContinue} />
      )}
      <MusicToggleButton
        isMusicOn={isMusicOn}
        setIsMusicOn={setIsMusicOn}
        toggleMusic={toggleMusic}
      />

      <div className="md:hidden h-1/4">
        {" "}
        {/* El teclado ocupará el 25% de la pantalla */}
        <VirtualKeyboard onKeyPress={handleVirtualKeyPress} />
      </div>
    </BrutalistBox>
  );
}
