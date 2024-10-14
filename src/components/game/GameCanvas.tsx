"use client";

import { useEffect, useRef } from "react";
import { startGame } from "./gameLogic";

export default function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        startGame(canvas, ctx); // Iniciar la lógica del juego
      }
    }
  }, []);

  return <canvas ref={canvasRef} width={800} height={600} />;
}
