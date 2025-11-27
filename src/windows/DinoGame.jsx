import { useEffect, useRef, useState } from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";

const DinoGame = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gameStateRef = useRef({
    dino: { x: 50, y: 0, velocityY: 0, jumping: false },
    obstacles: [],
    score: 0,
    gameOver: false,
    frameCount: 0,
    animationFrame: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const GRAVITY = 0.6;
    const JUMP_STRENGTH = 12; // Positive because we're going UP
    const GROUND_Y = 150;
    const DINO_WIDTH = 44;
    const DINO_HEIGHT = 47;
    const OBSTACLE_WIDTH = 25;
    const OBSTACLE_HEIGHT = 50;
    const GAME_SPEED = 6;

    let animationId;
    const gameState = gameStateRef.current;

    // Draw dino with pixel art
    const drawDino = (x, y, isDead = false) => {
      ctx.fillStyle = "#535353";

      if (isDead) {
        // Dead dino (X eyes)
        ctx.fillRect(x + 22, y, 22, 22);
        ctx.fillStyle = "#fff";
        ctx.fillRect(x + 26, y + 4, 2, 2);
        ctx.fillRect(x + 32, y + 4, 2, 2);
        ctx.fillRect(x + 28, y + 6, 2, 2);
        ctx.fillRect(x + 26, y + 8, 2, 2);
        ctx.fillRect(x + 32, y + 8, 2, 2);
        ctx.fillStyle = "#535353";
        ctx.fillRect(x + 22, y + 13, 6, 2);
        ctx.fillRect(x + 15, y + 22, 29, 25);
        ctx.fillRect(x + 15, y + 47, 7, 11);
        ctx.fillRect(x + 29, y + 47, 7, 11);
        ctx.fillRect(x, y + 25, 15, 7);
        ctx.fillRect(x + 18, y + 28, 4, 11);
      } else {
        // Alive dino - head
        ctx.fillRect(x + 22, y, 22, 22);
        // Eye
        ctx.fillStyle = "#fff";
        ctx.fillRect(x + 30, y + 6, 4, 4);
        ctx.fillStyle = "#535353";
        // Mouth
        ctx.fillRect(x + 22, y + 13, 6, 2);
        // Body
        ctx.fillRect(x + 15, y + 22, 29, 25);
        // Legs (alternating for running animation)
        const legOffset = gameState.animationFrame % 12 < 6 ? 0 : 2;
        ctx.fillRect(x + 15, y + 47, 7, 11 - legOffset);
        ctx.fillRect(x + 29, y + 47 + legOffset, 7, 11 - legOffset);
        // Tail
        ctx.fillRect(x, y + 25, 15, 7);
        ctx.fillRect(x + 2, y + 18, 7, 7);
        // Arms
        ctx.fillRect(x + 18, y + 28, 4, 11);
      }
    };

    // Draw cactus
    const drawCactus = (x, y) => {
      ctx.fillStyle = "#535353";

      const bodyWidth = 12;
      const bodyX = x + 6;

      // Main body
      ctx.fillRect(bodyX, y, bodyWidth, 40);

      // Left arm
      ctx.fillRect(bodyX - 6, y + 10, 6, 3);
      ctx.fillRect(bodyX - 6, y + 10, 3, 15);

      // Right arm
      ctx.fillRect(bodyX + bodyWidth, y + 15, 6, 3);
      ctx.fillRect(bodyX + bodyWidth + 3, y + 15, 3, 12);
    };

    // Reset game
    const resetGame = () => {
      gameState.dino = { x: 50, y: 0, velocityY: 0, jumping: false };
      gameState.obstacles = [];
      gameState.score = 0;
      gameState.gameOver = false;
      gameState.frameCount = 0;
      gameState.animationFrame = 0;
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
        // Update animation frame
        gameState.animationFrame++;

        // Update dino physics - y is height above ground
        gameState.dino.velocityY -= GRAVITY; // Gravity pulls down (reduces upward velocity)
        gameState.dino.y += gameState.dino.velocityY;

        // Ground collision
        if (gameState.dino.y <= 0) {
          gameState.dino.y = 0;
          gameState.dino.velocityY = 0;
          gameState.dino.jumping = false;
        }

        // Spawn obstacles
        gameState.frameCount++;
        if (gameState.frameCount % 90 === 0) {
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
        const dinoLeft = gameState.dino.x + 5;
        const dinoRight = gameState.dino.x + DINO_WIDTH - 5;

        for (let obstacle of gameState.obstacles) {
          const obstacleY = GROUND_Y - OBSTACLE_HEIGHT;
          const obstacleBottom = GROUND_Y;
          const obstacleLeft = obstacle.x + 5;
          const obstacleRight = obstacle.x + OBSTACLE_WIDTH - 5;

          if (
            dinoLeft < obstacleRight &&
            dinoRight > obstacleLeft &&
            dinoBottom > obstacleY &&
            dinoY < obstacleBottom
          ) {
            gameState.gameOver = true;
            setGameOver(true);
            break;
          }
        }

        // Update score
        gameState.score++;
        if (gameState.frameCount % 10 === 0) {
          setScore(Math.floor(gameState.score / 10));
        }
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
      ctx.font = "20px monospace";
      ctx.textAlign = "right";
      ctx.fillText(`HI ${score.toString().padStart(5, "0")}`, canvas.width - 20, 30);

      // Draw game over message
      if (gameState.gameOver) {
        ctx.fillStyle = "#535353";
        ctx.font = "24px monospace";
        ctx.textAlign = "center";
        ctx.fillText("G A M E  O V E R", canvas.width / 2, 60);
        ctx.font = "16px monospace";
        ctx.fillText("Press SPACE or TAP to restart", canvas.width / 2, 90);
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
  }, []);

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
