"use client";

import { useEffect, useRef, useState } from "react";
import { resetGame } from "./gameLogic";
import { useAudioControl, useInitializeGame } from "./hooks/GameCanvas.hook";
import GameOverMenu from "./GameOverMenu";
import Score from "./Score";
import BrutalistBox from "../box/BrutalistBox";
import WelcomeScreen from "./WelcomeScreen";
import MusicToggleButton from "./components/MusicToggleButton";

export default function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isMusicOn, setIsMusicOn] = useState(true);

  const toggleMusic = useAudioControl(isMusicOn, audioRef);
  const initializeGame = useInitializeGame(
    canvasRef,
    audioRef,
    isMusicOn,
    setIsGameOver,
    setScore
  );

  // Start game when welcome screen is dismissed
  useEffect(() => {
    if (!showWelcome) {
      initializeGame();
    }
  }, [showWelcome, initializeGame]);

  // Pause music on game over
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
    <BrutalistBox style={{ position: "relative" }}>
      {showWelcome && <WelcomeScreen onStart={handleStartGame} />}
      <audio
        ref={audioRef}
        src="/sounds/game/Juhani Junkala [Chiptune Adventures] 1. Stage 1.ogg"
        loop
      />
      <canvas ref={canvasRef} width={800} height={600} />
      <Score score={score} />
      {isGameOver && (
        <GameOverMenu onRetry={handleRetry} onContinue={handleContinue} />
      )}
      <MusicToggleButton
        isMusicOn={isMusicOn}
        setIsMusicOn={setIsMusicOn}
        toggleMusic={toggleMusic}
      />
    </BrutalistBox>
  );
}
