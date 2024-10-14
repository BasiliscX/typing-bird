export function createPipes(
  canvasWidth: number,
  canvasHeight: number,
  gap: number
) {
  const pipes: { x: number; y: number }[] = [];
  const pipeBottom = new Image();
  const pipeTop = new Image();
  pipeBottom.src = "/images/game/pipe.svg";
  pipeTop.src = "/images/game/pipeTop.svg";

  const pipeWidth = 60;
  const pipeHeight = 300;

  function update() {
    // Generar nuevos tubos
    if (pipes.length === 0 || pipes[pipes.length - 1].x < canvasWidth - 200) {
      const pipeY = Math.floor(Math.random() * (canvasHeight - gap));
      pipes.push({ x: canvasWidth, y: pipeY });
    }

    // Mover los tubos
    pipes.forEach((p) => {
      p.x -= 3;
    });

    // Eliminar tubos fuera de la pantalla
    for (let i = pipes.length - 1; i >= 0; i--) {
      if (pipes[i].x + pipeWidth < 0) {
        pipes.splice(i, 1);
      }
    }
  }

  function draw(ctx: CanvasRenderingContext2D) {
    pipes.forEach((p) => {
      ctx.drawImage(pipeTop, p.x, p.y - pipeHeight, pipeWidth, pipeHeight);
      ctx.drawImage(pipeBottom, p.x, p.y + gap, pipeWidth, pipeHeight);
    });
  }

  function checkCollision(birdY: number, birdHeight: number) {
    for (let i = 0; i < pipes.length; i++) {
      const p = pipes[i];
      if (
        (birdY < p.y || birdY > p.y + gap) &&
        50 > p.x &&
        50 < p.x + pipeWidth
      ) {
        return true;
      }
    }
    return false;
  }

  return { update, draw, checkCollision, pipes };
}
