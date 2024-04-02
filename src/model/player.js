import { GameBoard } from "./gameBoard";

class Player {
  playerBoard = new GameBoard(10, 10);
  static activePlayer = "human";
  #uniqueCoordinateSet = new Set();
  constructor(type) {
    this.type = type;
  }
  getOrientation(position) {
    if (this.type === "computer") {
      const random = Math.floor(Math.random() * 2);
      return random === 0 ? "vertical" : "horizontal";
    }
    return position;
  }
  getPlayerBoard() {
    return this.playerBoard.createBoard();
  }
  placementOfShipByPlayer(ship, coords, position) {
    if (this.type === "human") {
      return this.playerBoard.placeShips(ship, coords, position);
    }
    if (this.type === "computer") {
      coords = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];
      if (ship.placedArray.length === ship.length) {
        return ship.placedArray;
      } else {
        ship.placedArray = [];
        ship.isPlaced = false;
        this.playerBoard.placeShips(ship, coords, this.getOrientation());
      }
      return this.placementOfShipByPlayer(ship);
    }
    return ship.placedArray;
  }

  static switchPlayerTurn() {
    if (Player.activePlayer === "human") {
      Player.activePlayer = "computer";
    } else {
      Player.activePlayer = "human";
    }
    return Player.activePlayer;
  }

  shipAttack(board, coord) {
    //debugger;
    //this.activePlayer = this.type;
    if (Player.activePlayer === this.type) {
      //this.switchPlayerTurn();
      this.type === "computer"
        ? //(coord = [
          //     Math.floor(Math.random() * 8),
          //     Math.floor(Math.random() * 8),
          //   ])
          (coord = this.#generateUniqueCoordinates())
        : coord;
      const [x, y] = coord;
      if (board[x][y] !== null && board[x][y] !== "x") {
        board[x][y] = "x";
      }
      if (Player.activePlayer === "computer") {
        return coord;
      } else {
        return board;
      }
    }
    return false;
  }
  #generateUniqueCoordinates() {
    let x, y, coordinates;
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
    coordinates = [x, y];

    while (this.#uniqueCoordinateSet.has(JSON.stringify(coordinates))) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      coordinates = [x, y];
    }

    this.#uniqueCoordinateSet.add(JSON.stringify(coordinates));

    return coordinates;
  }
}
export { Player };
