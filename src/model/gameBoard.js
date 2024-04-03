import { Ship } from "./ship";

class GameBoard {
  board = [];
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
  }
  createBoard() {
    for (let i = 0; i < this.rows; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.columns; j++) {
        this.board[i][j] = null;
      }
    }
    return this.board;
  }

  #doShipCollide(coordinates) {
    const [x, y] = coordinates;
    return this.board.some(() => this.board[x][y] === null);
  }
  #isPlacementPossible(coordinates, direction, ship) {
    const [x, y] = coordinates;

    const isHorizontalOutOfBounds =
      direction === "horizontal" && y + ship.length - 1 > 9;
    const isVerticalOutOfBounds =
      direction === "vertical" && x + ship.length - 1 > 9;
    const isNegativeCoordinate = x < 0 || y < 0;

    return !(
      isHorizontalOutOfBounds ||
      isVerticalOutOfBounds ||
      isNegativeCoordinate
    );
  }

  #getShipPlacement(selectedShip, selectedPlacement, position) {
    const [x, y] = position;
    let i = 0;

    const isHorizontal = selectedPlacement === "horizontal";

    while (i < selectedShip.length) {
      const newPosition = isHorizontal ? [x, y + i] : [x + i, y];

      if (
        this.#isPlacementPossible(position, selectedPlacement, selectedShip) &&
        this.#doShipCollide(newPosition)
      ) {
        selectedShip.placedArray.push(newPosition);
        selectedShip.isPlaced = true;
      } else {
        return;
      }

      i++;
    }

    if (selectedShip.placedArray.length !== selectedShip.length) {
      return;
    }

    selectedShip.placedArray.forEach(
      ([a, b]) => (this.board[a][b] = selectedShip.name)
    );

    return selectedShip.placedArray;
  }
  placeShips(ship, coordinates, orientation) {
    return this.#getShipPlacement(ship, orientation, coordinates);
  }
  receiveAttack(selectedShip, coordinates) {
    const isShipHit = selectedShip.placedArray.some((element) =>
      element.every((e, i) => e === coordinates[i])
    );
    return isShipHit ? selectedShip.getHit() : "Attack Missed";
  }
}

export { GameBoard };
