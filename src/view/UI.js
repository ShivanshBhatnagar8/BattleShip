"use strict";
import {
  getComputerGameBoard,
  getHumanGameBoard,
} from "../controller/gameLogic";

const creatingGameUi = (() => {
  const body = document.querySelector("body");
  const winnerName = document.createElement("h2");
  winnerName.textContent = "Who Will Win?";
  const main = document.createElement("main");
  const header = document.createElement("header");
  const humanGameBoard = document.createElement("div");
  const computerGameBoard = document.createElement("div");
  const displayContainer = document.createElement("section");
  const buttonContainer = document.createElement("section");
  displayContainer.classList.add("display-container");
  buttonContainer.classList.add("button-container");
  function creatingBaseElements() {
    body.append(header, winnerName, main, displayContainer, buttonContainer);
  }

  const creatingHeaderElement = () => {
    const heading = document.createElement("h1");
    heading.textContent = "BattleShip";
    header.append(heading);
  };
  const creatingGameBoardUi = () => {
    humanGameBoard.classList.add("GameBoard");
    computerGameBoard.classList.add("GameBoard");
    main.append(humanGameBoard, computerGameBoard);
    //const computerBoard = computer.getPlayerBoard();
  };
  const creatingUserGameBoard = () => {
    const userBoard = getHumanGameBoard();
    for (let i = 0; i < userBoard.length; i++) {
      for (let j = 0; j < userBoard.length; j++) {
        const div = document.createElement("div");
        div.classList.add("user-box");
        div.setAttribute("data-x", i);
        div.setAttribute("data-y", j);
        humanGameBoard.appendChild(div);
      }
    }
  };
  const creatingComputerGameBoard = () => {
    const computerBoard = getComputerGameBoard();
    for (let i = 0; i < computerBoard.length; i++) {
      for (let j = 0; j < computerBoard.length; j++) {
        const computerBox = document.createElement("div");
        computerBox.classList.add("computer-box");
        computerBox.setAttribute("data-x", i);
        computerBox.setAttribute("data-y", j);
        computerGameBoard.appendChild(computerBox);
      }
    }
  };
  const creatingDisplaySection = () => {
    const playerText = document.createElement("p");
    playerText.textContent = "PLAYER";
    const computerText = document.createElement("p");
    computerText.textContent = "COMPUTER";
    displayContainer.append(playerText, computerText);
  };
  const creatingButtonSection = () => {
    const gameGuidelines = document.createElement("p");
    gameGuidelines.textContent =
      "Place your five available ships on the game board to play, You can place them horizontally or vertically";
    const orientationButton = document.createElement("button");
    orientationButton.textContent = "Horizontal";
    orientationButton.classList.add("btn-orientation");
    const resetGame = document.createElement("button");
    resetGame.textContent = "Play Again";
    resetGame.classList.add("btn-reset");
    buttonContainer.append(gameGuidelines, orientationButton, resetGame);
  };
  function pageLoad() {
    creatingBaseElements();
    creatingHeaderElement();
    creatingGameBoardUi();
    creatingUserGameBoard();
    creatingComputerGameBoard();
    creatingDisplaySection();
    creatingButtonSection();
  }
  return {
    body,
    header,
    main,
    humanGameBoard,
    computerGameBoard,
    displayContainer,
    pageLoad,
    creatingHeaderElement,
    creatingBaseElements,
    creatingGameBoardUi,
    creatingUserGameBoard,
    creatingComputerGameBoard,
    creatingDisplaySection,
    creatingButtonSection,
  };
})();

export { creatingGameUi };
