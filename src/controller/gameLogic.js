import { Ship } from "../model/ship";
import { GameBoard } from "../model/gameBoard";
import { Player } from "../model/player";
import {
  getPlayerGrid,
  getComputerGrid,
  getActivePlayer,
  getOrientationButton,
  getResetButton,
} from "./Dom";

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
// function placementOfShipByComputer(array, grid, box) {
//   console.log(array);
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       if (array[i][j] === "x") {
//         const cell = document.querySelector(
//           `.${box}[data-x="${i}"][data-y="${j}"]`
//         );
//         cell.style.backgroundColor = "red";
//       } else {
//         const cell = document.querySelector(
//           `.${box}[data-x="${i}"][data-y="${j}"]`
//         );
//         cell.style.backgroundColor = "blue";
//       }
//     }
//     break;
//   }
// }

function renderShipOnGrid(ship) {
  const userGrids = getPlayerGrid();
  userGrids.forEach((el) => {
    const positionBtn = getOrientationButton();
    el.addEventListener("click", function () {
      const position = positionBtn.textContent;
      const x = el.getAttribute("data-x");
      const y = el.getAttribute("data-y");
      //console.log(ship);
      if (!ship.isPlaced) {
        const result = human.placementOfShipByPlayer(
          ship,
          [Number(x), Number(y)],
          position.toLowerCase()
        );
        console.log(ship);
        if (result !== undefined) {
          console.log(ship.isPlaced);
          console.log(result);
          Ship.shipCount++;
          console.log(Ship.shipCount);
          placementOfShipInUi(result, "user-box");
          if (Ship.shipCount === 5) {
            console.log(Ship.shipCount);
            console.log(human.playerBoard.board);
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
      const result = computer.placementOfShipByPlayer(ship);
      if (result !== undefined) {
        placementOfShipInUi(result, "computer-box");
        // Player.switchPlayerTurn();
      }
    }
  });
}

function humanAttack(board, grids) {
  grids.forEach((el) => {
    if (
      el.style.backgroundColor !== "red" &&
      el.style.backgroundColor !== "blue"
    ) {
      el.addEventListener("click", function () {
        console.log("hello");
        const x = el.getAttribute("data-x");
        const y = el.getAttribute("data-y");
        if (Player.activePlayer === "human") {
          const result = human.shipAttack(board, [Number(x), Number(y)]);
          console.log(x, y);
          console.log(result);
          console.log(Player.activePlayer);
          if (result && result[Number(x)][Number(y)] !== null) {
            console.log(result[Number(x)][Number(y)]);
            el.style.backgroundColor = "red";
            Player.switchPlayerTurn();
            attackLogic();
          } else {
            el.style.backgroundColor = "blue";
            Player.switchPlayerTurn();
            attackLogic();
          }
          console.log(Player.activePlayer);
        }
      });
    }
  });
}

function computerAttack(board, grids, box) {
  if (Player.activePlayer === "computer") {
    const result = computer.shipAttack(board);
    const x = Math.floor(Math.random() * 8);
    const y = Math.floor(Math.random() * 8);
    const cell = document.querySelector(
      `.${box}[data-x="${x}"][data-y="${y}"]`
    );
    if (cell.backgroundColor !== "red" && cell.backgroundColor !== "blue") {
      if (result[x][y] === "x") {
        console.log(result);
        console.log(result[x][y]);
        result[x][y] = "x";
        cell.style.backgroundColor = "red";
      } else if (result[x][y] === null) {
        console.log(result[x][y]);
        cell.style.backgroundColor = "blue";
      }
      Player.switchPlayerTurn();
    }
  }
}

function attackLogic() {
  const userGrids = getPlayerGrid();
  const computerGrids = getComputerGrid();
  if (Player.activePlayer === "human") {
    humanAttack(computer.playerBoard.board, computerGrids);
    //console.log(Player.activePlayer);
    //Player.switchPlayerTurn();
  } else {
    computerAttack(human.playerBoard.board, userGrids, "user-box");

    //console.log(Player.activePlayer);
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
