export function startGame(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
) {
  const bird = new Image();
  const background = new Image();
  const pipe = new Image();

  bird.src = "/images/game/bird.svg";
  background.src = "/images/game/background.svg";
  pipe.src = "/images/game/pipe.svg";

  let birdY = canvas.height / 2;
  let gravity = 0.6;
  let velocity = 0;
  let pipes: { x: number; y: number }[] = [];
  let pipeWidth = 60;
  let pipeHeight = 300;
  let gap = 200;
  let frame = 0;

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === " ") {
      velocity = -10; // Saltar
    }
  };

  window.addEventListener("keydown", handleKeyPress);

  function update() {
    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar el fondo
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Actualizar la posición del pájaro
    velocity += gravity;
    birdY += velocity;

    // Dibujar el pájaro
    ctx.drawImage(bird, 50, birdY, 50, 50);

    // Generar nuevos tubos
    if (frame % 90 === 0) {
      let pipeY = Math.floor(Math.random() * (canvas.height - gap));
      pipes.push({ x: canvas.width, y: pipeY });
    }

    // Dibujar y mover los tubos
    for (let i = pipes.length - 1; i >= 0; i--) {
      let p = pipes[i];
      ctx.drawImage(pipe, p.x, p.y, pipeWidth, pipeHeight); // Tubo superior
      ctx.drawImage(pipe, p.x, p.y + pipeHeight + gap, pipeWidth, pipeHeight); // Tubo inferior

      p.x -= 3; // Mover tubos a la izquierda

      // Eliminar tubos fuera de la pantalla
      if (p.x + pipeWidth < 0) {
        pipes.splice(i, 1);
      }

      // Comprobar colisión
      if (birdY < p.y + pipeHeight || birdY > p.y + pipeHeight + gap) {
        if (50 > p.x && 50 < p.x + pipeWidth) {
          alert("Game Over!"); // Mostrar alerta en caso de colisión
          window.removeEventListener("keydown", handleKeyPress);
          return; // Terminar el juego
        }
      }
    }

    // Comprobar si el pájaro toca el suelo o el techo
    if (birdY + 50 > canvas.height || birdY < 0) {
      alert("Game Over!"); // Mostrar alerta en caso de colisión
      window.removeEventListener("keydown", handleKeyPress);
      return; // Terminar el juego
    }

    frame++;
    requestAnimationFrame(update); // Seguir el loop del juego
  }

  // Asegúrate de que todas las imágenes se carguen antes de iniciar el juego
  let imagesLoaded = 0;
  const imagesToLoad = 3;

  function onImageLoad() {
    imagesLoaded++;
    if (imagesLoaded === imagesToLoad) {
      update(); // Inicia el juego solo cuando todas las imágenes están cargadas
    }
  }

  bird.onload = onImageLoad;
  background.onload = onImageLoad;
  pipe.onload = onImageLoad;
}
