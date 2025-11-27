import { useEffect, useRef, useState } from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";

const DinoGame = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gameStateRef = useRef({
    dino: { x: 50, y: 0, velocityY: 0, jumping: false },
    obstacles: [],
    score: 0,
    gameOver: false,
    frameCount: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const GRAVITY = 0.6;
    const JUMP_STRENGTH = 12;
    const GROUND_Y = 150;
    const DINO_WIDTH = 35;
    const DINO_HEIGHT = 40;
    const OBSTACLE_WIDTH = 20;
    const OBSTACLE_HEIGHT = 35;
    const GAME_SPEED = 6;

    let animationId;
    const gameState = gameStateRef.current;

    // Draw dino using text emoji (flipped to face right)
    const drawDino = (x, y, isDead = false) => {
      ctx.save();
      ctx.font = "40px Arial";
      ctx.textBaseline = "bottom";

      // Flip horizontally to make dino face right
      ctx.translate(x + DINO_WIDTH, y);
      ctx.scale(-1, 1);

      if (isDead) {
        ctx.fillText("🦖", 0, DINO_HEIGHT);
        // Draw X eyes
        ctx.font = "12px Arial";
        ctx.fillStyle = "#ff0000";
        ctx.scale(-1, 1); // Flip back for eyes
        ctx.fillText("✖", -30, 15);
        ctx.fillText("✖", -15, 15);
      } else {
        ctx.fillText("🦖", 0, DINO_HEIGHT);
      }

      ctx.restore();
    };

    // Draw cactus using text emoji
    const drawCactus = (x, y) => {
      ctx.font = "35px Arial";
      ctx.textBaseline = "bottom";
      ctx.fillText("🌵", x, y + OBSTACLE_HEIGHT);
    };

    // Reset game
    const resetGame = () => {
      gameState.dino = { x: 50, y: 0, velocityY: 0, jumping: false };
      gameState.obstacles = [];
      gameState.score = 0;
      gameState.gameOver = false;
      gameState.frameCount = 0;
      setScore(0);
      setGameOver(false);
    };

    // Jump function
    const jump = () => {
      if (!gameState.dino.jumping && !gameState.gameOver) {
        gameState.dino.velocityY = JUMP_STRENGTH;
        gameState.dino.jumping = true;
      }
    };

    // Handle keyboard events
    const handleKeyDown = (e) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        if (gameState.gameOver) {
          resetGame();
        } else {
          jump();
        }
      }
    };

    // Handle touch/click events
    const handleTouchStart = (e) => {
      e.preventDefault();
      if (gameState.gameOver) {
        resetGame();
      } else {
        jump();
      }
    };

    // Add event listeners
    window.addEventListener("keydown", handleKeyDown);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("click", handleTouchStart);

    // Game loop
    const gameLoop = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.fillStyle = "#f7f7f7";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (!gameState.gameOver) {
        // Update dino physics
        gameState.dino.velocityY -= GRAVITY;
        gameState.dino.y += gameState.dino.velocityY;

        // Ground collision
        if (gameState.dino.y <= 0) {
          gameState.dino.y = 0;
          gameState.dino.velocityY = 0;
          gameState.dino.jumping = false;
        }

        // Spawn obstacles
        gameState.frameCount++;
        if (gameState.frameCount % 100 === 0) {
          gameState.obstacles.push({
            x: canvas.width,
          });
        }

        // Update obstacles
        gameState.obstacles = gameState.obstacles.filter((obstacle) => {
          obstacle.x -= GAME_SPEED;
          return obstacle.x > -OBSTACLE_WIDTH;
        });

        // Check collisions
        const dinoY = GROUND_Y - DINO_HEIGHT - gameState.dino.y;
        const dinoBottom = dinoY + DINO_HEIGHT;
        const dinoLeft = gameState.dino.x;
        const dinoRight = gameState.dino.x + DINO_WIDTH;

        for (let obstacle of gameState.obstacles) {
          const obstacleY = GROUND_Y - OBSTACLE_HEIGHT;
          const obstacleBottom = GROUND_Y;
          const obstacleLeft = obstacle.x;
          const obstacleRight = obstacle.x + OBSTACLE_WIDTH;

          if (
            dinoLeft < obstacleRight - 5 &&
            dinoRight > obstacleLeft + 5 &&
            dinoBottom > obstacleY + 5 &&
            dinoY < obstacleBottom
          ) {
            gameState.gameOver = true;
            setGameOver(true);
            if (gameState.score > highScore) {
              setHighScore(gameState.score);
            }
            break;
          }
        }

        // Update score
        gameState.score++;
        setScore(gameState.score);
      }

      // Draw ground line
      ctx.strokeStyle = "#535353";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y);
      ctx.lineTo(canvas.width, GROUND_Y);
      ctx.stroke();

      // Draw dino
      const dinoY = GROUND_Y - DINO_HEIGHT - gameState.dino.y;
      drawDino(gameState.dino.x, dinoY, gameState.gameOver);

      // Draw obstacles (cacti)
      gameState.obstacles.forEach((obstacle) => {
        const obstacleY = GROUND_Y - OBSTACLE_HEIGHT;
        drawCactus(obstacle.x, obstacleY);
      });

      // Draw score
      ctx.fillStyle = "#535353";
      ctx.font = "bold 16px monospace";
      ctx.textAlign = "right";
      ctx.textBaseline = "top";
      ctx.fillText(`HI: ${highScore.toString().padStart(5, "0")}  ${score.toString().padStart(5, "0")}`, canvas.width - 20, 20);

      // Draw game over message
      if (gameState.gameOver) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#fff";
        ctx.font = "bold 30px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 20);

        ctx.font = "16px Arial";
        ctx.fillText("Press SPACE or TAP to restart", canvas.width / 2, canvas.height / 2 + 20);

        ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 + 50);
      }

      animationId = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("keydown", handleKeyDown);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("click", handleTouchStart);
    };
  }, [highScore]);

  return (
    <>
      <div id="window-header">
        <WindowControls target="dinogame" />
        <h2 className="font-bold text-sm text-center flex-1">Chrome Dino Game</h2>
      </div>

      <div className="dino-game-container">
        <canvas
          ref={canvasRef}
          width={600}
          height={200}
          className="dino-canvas"
        />
      </div>
    </>
  );
};

const DinoGameWindow = WindowWrapper(DinoGame, "dinogame");

export default DinoGameWindow;
