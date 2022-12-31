"use strict";
const playerScoreEl = document.querySelector("#player--score");
const computerScoreEl = document.querySelector("#computer--score");
const btnRock = document.querySelector("#btn--rock");
const btnPaper = document.querySelector("#btn--paper");
const btnScissor = document.querySelector("#btn--scissor");
const imgPlayer = document.querySelector("#player--img");
const imgComputer = document.querySelector("#computer--img");
const moveSet = ["rock", "paper", "scissor"];

let randomNumber = Math.trunc(Math.random() * 3);
let playerScore = 0;
let playerMove;
let computerScore = 0;
let computerMove;

const changeImgs = function () {
  imgPlayer.classList.remove("hidden");
  imgComputer.classList.remove("hidden");

  if (computerMove === "rock") imgComputer.src = "1.png";
  else if (computerMove === "paper") imgComputer.src = "2.png";
  else imgComputer.src = "3.png";

  if (playerMove === "rock") imgPlayer.src = "1.png";
  else if (playerMove === "paper") imgPlayer.src = "2.png";
  else if (playerMove === "scissor") imgPlayer.src = "3.png";
};

const moves = function (move) {
  randomNumber = Math.trunc(Math.random() * 3);
  playerMove = move;
  computerMove = moveSet[randomNumber];
  checkWinner(playerMove, computerMove);
  changeImgs()
};

const checkWinner = function (p1, p2) {
  if (
    (p1 === "rock" && p2 === "scissor") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "scissor" && p2 === "paper")
  ) {
    playerScore += 1;
    playerScoreEl.textContent = playerScore;
  } else if (
    (p2 === "rock" && p1 === "scissor") ||
    (p2 === "paper" && p1 === "rock") ||
    (p2 === "scissor" && p1 === "paper")
  ) {
    computerScore += 1;
    computerScoreEl.textContent = computerScore;
  }
};

btnRock.addEventListener("click", function (e) {
    moves(e.target.textContent)
});

btnPaper.addEventListener("click", function (e) {
    moves(e.target.textContent)
});

btnScissor.addEventListener("click", function (e) {
    moves(e.target.textContent)
});
