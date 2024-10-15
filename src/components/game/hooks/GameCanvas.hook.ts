import { useEffect, useCallback } from "react";
import { startGame } from "../gameLogic";

// Custom hook for handling audio logic
export function useAudioControl(
  isMusicOn: boolean,
  audioRef: React.RefObject<HTMLAudioElement>
) {
  useEffect(() => {
    if (isMusicOn && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isMusicOn, audioRef]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicOn) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  return toggleMusic;
}

// Custom hook for initializing the game
export function useInitializeGame(
  canvasRef: React.RefObject<HTMLCanvasElement>,
  audioRef: React.RefObject<HTMLAudioElement>,
  isMusicOn: boolean,
  setIsGameOver: (gameOver: boolean) => void,
  setScore: (score: number) => void
) {
  const initializeGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        startGame(canvas, ctx, setIsGameOver, setScore);
        if (audioRef.current && isMusicOn) {
          audioRef.current.play();
        }
      }
    }
  }, [canvasRef, audioRef, isMusicOn, setIsGameOver, setScore]);

  return initializeGame;
}
