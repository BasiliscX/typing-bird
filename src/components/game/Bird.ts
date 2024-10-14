export function createBird(canvasHeight: number) {
  const bird = new Image();
  bird.src = "/images/game/bird.svg";

  const birdState = {
    y: canvasHeight / 2,
    velocity: 0,
    gravity: 0.6,
  };

  function update() {
    birdState.velocity += birdState.gravity;
    birdState.y += birdState.velocity;
  }

  function draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(bird, 50, birdState.y, 50, 50);
  }

  function jump() {
    birdState.velocity = -10; // Salta
  }

  function reset() {
    birdState.y = canvasHeight / 2;
    birdState.velocity = 0;
  }

  return { update, draw, jump, reset, birdState };
}
