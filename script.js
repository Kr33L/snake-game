const gameBoard = document.querySelector("#game-board");
const startButton = document.querySelector("#start-button");
const pauseButton = document.querySelector("#pause-button");
const restartButton = document.querySelector("#restart-button");

const BOARD_SIZE = 400;
const UNIT_SIZE = 20;
const UPDATE_INTERVAL = 100;

let snakePosition = [{ x: 0, y: 0 }];
let foodPosition = { x: 200, y: 200 };
let snakeDirection = "right";
let isGameOver = false;
let score = 0;

function userInput(event) {
  if (event === "ArrowUp") snakeDirection = "up";
  if (event === "ArrowDown") snakeDirection = "down";
  if (event === "ArrowLeft") snakeDirection = "left";
  if (event === "ArrowRight") snakeDirection = "right";
}

function startGame() {
  // reset game state
  snakePosition = [{ x: 0, y: 0 }];
  foodPosition = { x: 200, y: 200 };
  snakeDirection = "right";
  isGameOver = false;
  score = 0;

  // start game loop
  gameLoop = setInterval(updateGame, UPDATE_INTERVAL);
}

function pauseGame() {
  clearInterval(gameLoop);
}

function restartGame() {
  pauseGame();
  startGame();
}

function updateGame() {}

document.addEventListener("keydown", userInput);
startButton.addEventListener("click", startGame);
pauseButton.addEventListener("click", pauseGame);
restartButton.addEventListener("click", restartGame);
