let birdY = 0;
let velocity = 0;
const pipes: { x: number; y: number; letter: string; passed: boolean }[] = [];
let gameOver = false;
let frame = 0;
let currentJumpKey = " "; // Inicializar con la tecla de espacio
const gravity = 0.6;
const pipeWidth = 60;
const pipeHeight = 400;
const gap = 200;

function getRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

export function startGame(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  setIsGameOver: (gameOver: boolean) => void,
  setScore: (score: number) => void
) {
  let score = 0;
  const bird = new Image();
  const background = new Image();
  const pipeBottom = new Image();
  const pipeTop = new Image();

  bird.src = "/images/game/bird.svg";
  background.src = "/images/game/background.svg";
  pipeBottom.src = "/images/game/pipe.svg";
  pipeTop.src = "/images/game/pipeTop.svg";

  birdY = canvas.height / 2;

  const handleKeyPress = (e: KeyboardEvent) => {
    const keyPressed = e.key.toUpperCase();

    // Permitir saltar con la tecla correcta, con "Tab" hasta puntaje 10, o con " " al inicio
    if (
      keyPressed === currentJumpKey ||
      (keyPressed === "TAB" && score < 10) ||
      (keyPressed === " " && currentJumpKey === " ") // Al inicio del juego con espacio
    ) {
      velocity = -10; // Saltar
    }
  };

  window.addEventListener("keydown", handleKeyPress);

  function update() {
    if (gameOver) return;

    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar el fondo
    ctx.drawImage(background, 0, 0, canvas.width + 400, canvas.height);

    // Actualizar la posición del pájaro
    velocity += gravity;
    birdY += velocity;

    // Dibujar el pájaro
    ctx.drawImage(bird, 50, birdY, 50, 50);

    // Generar nuevos tubos
    if (frame % 90 === 0) {
      const pipeY = Math.floor(Math.random() * (canvas.height - gap));
      const letter = getRandomLetter();
      pipes.push({ x: canvas.width, y: pipeY, letter, passed: false });
    }

    // Dibujar y mover los tubos
    for (let i = pipes.length - 1; i >= 0; i--) {
      const p = pipes[i];

      // Dibujar tubería superior
      ctx.drawImage(pipeTop, p.x, p.y - pipeHeight, pipeWidth, pipeHeight);

      // Dibujar tubería inferior
      ctx.drawImage(pipeBottom, p.x, p.y + gap, pipeWidth, pipeHeight);

      // Dibujar la letra sobre la tubería con sombra
      ctx.font = "30px Arial";
      ctx.fillStyle = "black";
      ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
      ctx.font = "bold 30px Arial";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 3;

      // Dibujar la letra
      ctx.fillText(p.letter, p.x + pipeWidth / 2 - 10, p.y + gap / 2);

      // Eliminar el efecto de sombra después de dibujar la letra
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      p.x -= 3;

      // Incrementar el puntaje cuando el pájaro pasa el pipe
      if (p.x + pipeWidth < 50 && !p.passed) {
        p.passed = true;
        score += 1;
        setScore(score);

        // Actualizar la tecla de salto al pasar el pipe
        currentJumpKey = p.letter; // Solo puedes saltar con la letra del pipe que has pasado
      }

      // Eliminar tubos fuera de la pantalla
      if (p.x + pipeWidth < 0) {
        pipes.splice(i, 1);
      }

      // Comprobar colisión
      if (
        (birdY < p.y || birdY > p.y + gap) &&
        50 > p.x &&
        50 < p.x + pipeWidth
      ) {
        gameOver = true;
        setIsGameOver(true);
        return;
      }
    }

    // Comprobar si el pájaro toca el suelo o el techo
    if (birdY + 50 > canvas.height || birdY < 0) {
      gameOver = true;
      setIsGameOver(true);
      return;
    }

    frame++;
    requestAnimationFrame(update);
  }

  // Asegurarse de que todas las imágenes se carguen antes de iniciar el juego
  let imagesLoaded = 0;
  const imagesToLoad = 4;

  function onImageLoad() {
    imagesLoaded++;
    if (imagesLoaded === imagesToLoad) {
      update();
    }
  }

  bird.onload = onImageLoad;
  background.onload = onImageLoad;
  pipeBottom.onload = onImageLoad;
  pipeTop.onload = onImageLoad;
}

export function resetGame(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  setIsGameOver: (gameOver: boolean) => void,
  setScore: (score: number) => void
) {
  birdY = canvas.height / 2;
  velocity = 0;
  pipes.length = 0;
  frame = 0;
  gameOver = false;
  currentJumpKey = " "; // Reiniciar la tecla de salto al espacio

  setIsGameOver(false);
  setScore(0); // Reiniciar el puntaje
  startGame(canvas, ctx, setIsGameOver, setScore); // Reiniciar el juego
}
