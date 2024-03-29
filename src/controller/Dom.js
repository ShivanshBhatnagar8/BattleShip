"use strict";

function getPlayerGrid() {
  const userBox = document.querySelectorAll(".user-box");
  return userBox;
}

function getComputerGrid() {
  const computerBox = document.querySelectorAll(".computer-box");
  return computerBox;
}

function getWinnerName() {
  const winnerName = document.querySelector("h2");
  return winnerName;
}

function getActivePlayer() {
  const activePlayer = document.querySelector(".active-player");
  return activePlayer;
}

function getOrientationButton() {
  const orientationButton = document.querySelector(".btn-orientation");
  return orientationButton;
}

function getResetButton() {
  const resetButton = document.querySelector(".btn-reset");
  return resetButton;
}

export {
  getPlayerGrid,
  getComputerGrid,
  getActivePlayer,
  getOrientationButton,
  getResetButton,
};
