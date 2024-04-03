import { Ship } from "../model/ship";
import { GameBoard } from "../model/gameBoard";
import { Player } from "../model/player";
import {
  getPlayerGrid,
  getComputerGrid,
  getWinnerName,
  getOrientationButton,
  getResetButton,
} from "./Dom";

let haveWinner = false;

let human = new Player("human");
let computer = new Player("computer");
let carrier = new Ship("carrier", 5, 0, false);
let destroyer = new Ship("destroyer", 2, 0, false);
let submarine = new Ship("submarine", 3, 0, false);
let cruiser = new Ship("cruiser", 3, 0, false);
let battleship = new Ship("battleship", 4, 0, false);

let destroyerAi = new Ship("destroyer", 2, 0, false);
let submarineAi = new Ship("submarine", 3, 0, false);
let cruiserAi = new Ship("cruiser", 3, 0, false);
let battleshipAi = new Ship("battleship", 4, 0, false);
let carrierAi = new Ship("carrier", 5, 0, false);

/***************GETTING DOM ******************** */
function getHumanGameBoard() {
  return human.getPlayerBoard();
}

function getComputerGameBoard() {
  return computer.getPlayerBoard();
}
/************************************************* */

/********HELPER FUNCTIONS************************ */
function placementOfShipInUi(array, box) {
  array.forEach((coords) => {
    const [x, y] = coords;
    const cell = document.querySelector(
      `.${box}[data-x="${x}"][data-y="${y}"]`
    );
    if (cell) {
      cell.style.backgroundColor = "green";
    }
  });
}

function renderShipOnGrid(ship) {
  const userGrids = getPlayerGrid();
  userGrids.forEach((el) => {
    const positionBtn = getOrientationButton();
    el.addEventListener("click", function () {
      const position = positionBtn.textContent;
      const x = el.getAttribute("data-x");
      const y = el.getAttribute("data-y");
      if (!ship.isPlaced) {
        const result = human.placementOfShipByPlayer(
          ship,
          [Number(x), Number(y)],
          position.toLowerCase()
        );
        if (result !== undefined) {
          Ship.shipCount++;
          placementOfShipInUi(result, "user-box");
          if (Ship.shipCount === 5) {
            attackLogic();
          }
        }
      }
    });
  });
}

function renderShipOnGridByComputer(ship) {
  const computerGrids = getComputerGrid();
  computerGrids.forEach(() => {
    if (!ship.isPlaced) {
      computer.placementOfShipByPlayer(ship);
    }
  });
}

function humanAttack(board, grids, box) {
  grids.forEach((el) => {
    el.addEventListener("click", function () {
      const x = el.getAttribute("data-x");
      const y = el.getAttribute("data-y");
      const cell = document.querySelector(
        `.${box}[data-x="${x}"][data-y="${y}"]`
      );
      if (
        Player.activePlayer === "human" &&
        cell.style.backgroundColor !== "red" &&
        cell.style.backgroundColor !== "blue" &&
        !haveWinner
      ) {
        const result = human.shipAttack(board, [Number(x), Number(y)]);
        checkingIfShipAttacked([Number(x), Number(y)], "computer");
        if (result && result[Number(x)][Number(y)] !== null) {
          el.style.backgroundColor = "red";
          Player.switchPlayerTurn();
          attackLogic();
        } else {
          el.style.backgroundColor = "blue";
          Player.switchPlayerTurn();
          attackLogic();
        }
      }
    });
  });
}

function computerAttack(board, box) {
  if (Player.activePlayer === "computer") {
    const result = computer.shipAttack(board);
    checkingIfShipAttacked(result, "human");
    const [x, y] = result;

    const cell = document.querySelector(
      `.${box}[data-x="${x}"][data-y="${y}"]`
    );
    if (board[x][y] !== null) {
      cell.style.backgroundColor = "red";
    } else {
      cell.style.backgroundColor = "blue";
    }
  }
  Player.switchPlayerTurn();
}

function checkingIfShipAttacked(coords, opponent) {
  if (opponent === "human") {
    const shipHolder = [carrier, battleship, cruiser, destroyer, submarine];
    shipHolder.forEach((el) => {
      human.playerBoard.receiveAttack(el, coords);
    });

    winnerLogic(shipHolder, opponent);
  } else if (opponent === "computer") {
    const shipHolder = [
      carrierAi,
      battleshipAi,
      cruiserAi,
      destroyerAi,
      submarineAi,
    ];
    shipHolder.forEach((el) => {
      computer.playerBoard.receiveAttack(el, coords);
    });

    winnerLogic(shipHolder, opponent);
  }
}

function changeOrientation() {
  const orientationBtn = getOrientationButton();
  orientationBtn.addEventListener("click", function () {
    if (orientationBtn.textContent === "Horizontal") {
      orientationBtn.textContent = "Vertical";
    } else {
      orientationBtn.textContent = "Horizontal";
    }
  });
}
/**************************************************************** */

/***************ACTUAL GAME LOGIC************************* */

function placeShipByUser(ship) {
  if (!ship.isPlaced) {
    return renderShipOnGrid(ship);
  }
}

function placeShipByComputer(ship) {
  if (!ship.isPlaced) {
    return renderShipOnGridByComputer(ship);
  }
}
function attackLogic() {
  const computerGrids = getComputerGrid();
  if (Player.activePlayer === "human") {
    humanAttack(computer.playerBoard.board, computerGrids, "computer-box");
  } else {
    computerAttack(human.playerBoard.board, "user-box");
  }
}
function winnerLogic(array, opponent) {
  const winner = getWinnerName();
  const isWinner = array.every((el) => {
    return el.isShipSunk();
  });
  if (isWinner && opponent === "computer") {
    winner.textContent = "YOU WON!";
    haveWinner = true;
  } else if (isWinner && opponent === "human") {
    winner.textContent = "COMPUTER WON!";
    haveWinner = true;
  }
}
function resetGame() {
  const gameResetButton = getResetButton();
  gameResetButton.addEventListener("click", function () {
    location.reload();
  });
}
function renderLogic() {
  changeOrientation();
  placeShipByUser(carrier);
  placeShipByUser(battleship);
  placeShipByUser(cruiser);
  placeShipByUser(destroyer);
  placeShipByUser(submarine);
  placeShipByComputer(carrierAi);
  placeShipByComputer(battleshipAi);
  placeShipByComputer(cruiserAi);
  placeShipByComputer(destroyerAi);
  placeShipByComputer(submarineAi);
  resetGame();
}
/*********************************************************** */

export {
  getComputerGameBoard,
  getHumanGameBoard,
  renderLogic,
  renderShipOnGrid,
};
