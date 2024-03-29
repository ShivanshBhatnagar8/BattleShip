import { Ship } from "../model/ship";
import { GameBoard } from "../model/gameBoard";

describe("Creating GameBoard", () => {
  test("GameBoard Test", () => {
    let board = new GameBoard(10, 10);
    const result = board.createBoard();
    expect(result.length).toBe(10);
    result.forEach((col) => {
      expect(col.length).toBe(10);
    });
    result.forEach((row) => {
      row.forEach((element) => {
        expect(element).toBe(null);
      });
    });
  });
});

describe("Carrier on GameBoard", () => {
  test("Carrier test", () => {
    let ca = new Ship("Carrier", 5, 0, false);
    let board = new GameBoard(10, 10);
    board.createBoard();

    expect(board.placeShips(ca, [0, 3], "horizontal")).toStrictEqual([
      [0, 3],
      [0, 4],
      [0, 5],
      [0, 6],
      [0, 7],
    ]);
    expect(ca.placedArray.length).toEqual(ca.length);
    expect(board.receiveAttack(ca, [0, 3])).toBe(1);
    expect(board.receiveAttack(ca, [0, 4])).toBe(2);
    expect(board.receiveAttack(ca, [0, 5])).toBe(3);
    expect(board.receiveAttack(ca, [0, 6])).toBe(4);
    expect(board.receiveAttack(ca, [0, 7])).toBe(5);
    expect(ca.isShipSunk()).toBe(true);
    expect(board.hasAllShipSunk(ca)).toBe(false);
  });
});
describe("BattleShip on GameBoard", () => {
  test("BattleShip test", () => {
    let ba = new Ship("battleShip", 4, 0, false);
    let board = new GameBoard(10, 10);
    board.createBoard();
    expect(board.placeShips(ba, [1, 2], "horizontal")).toStrictEqual([
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
    ]);
    expect(ba.placedArray.length).toEqual(ba.length);
    expect(board.receiveAttack(ba, [1, 4])).toBe(1);
    expect(board.receiveAttack(ba, [1, 2])).toBe(2);
    expect(board.receiveAttack(ba, [1, 3])).toBe(3);
    expect(board.receiveAttack(ba, [1, 5])).toBe(4);
    expect(ba.isShipSunk()).toBe(true);
    expect(board.hasAllShipSunk(ba)).toBe(false);
  });
});

describe("Submarine on GameBoard", () => {
  test("Submarine test", () => {
    let sub = new Ship("Submarine", 3, 0, false);
    let board = new GameBoard(10, 10);
    board.createBoard();

    expect(board.placeShips(sub, [5, 3], "vertical")).toStrictEqual([
      [5, 3],
      [6, 3],
      [7, 3],
    ]);
    expect(sub.placedArray.length).toBe(sub.length);
    expect(board.receiveAttack(sub, [5, 3])).toBe(1);
    expect(board.receiveAttack(sub, [6, 3])).toBe(2);
    expect(board.receiveAttack(sub, [7, 3])).toBe(3);
    expect(sub.isShipSunk()).toBe(true);
    expect(board.hasAllShipSunk(sub)).toBe(false);
  });
});

describe("Cruiser on GameBoard", () => {
  test("Cruiser test", () => {
    let cr = new Ship("Cruiser", 3, 0, false);
    let board = new GameBoard(10, 10);
    board.createBoard();
    expect(board.placeShips(cr, [8, 3], "horizontal")).toStrictEqual([
      [8, 3],
      [8, 4],
      [8, 5],
    ]);
    expect(cr.placedArray.length).toBe(cr.length);
    expect(board.receiveAttack(cr, [8, 3])).toBe(1);
    expect(board.receiveAttack(cr, [8, 4])).toBe(2);
    expect(board.receiveAttack(cr, [8, 5])).toBe(3);
    expect(cr.isShipSunk()).toBe(true);
    expect(board.hasAllShipSunk(cr)).toBe(false);
  });
});

describe("Destroyer on GameBoard", () => {
  test("Destroyer test", () => {
    let des = new Ship("Destroyer", 2, 0, false);
    let board = new GameBoard(10, 10);
    board.createBoard();
    expect(board.placeShips(des, [6, 6], "vertical")).toStrictEqual([
      [6, 6],
      [7, 6],
    ]);
    expect(des.placedArray.length).toBe(des.length);
    expect(board.receiveAttack(des, [6, 6])).toBe(1);
    expect(board.receiveAttack(des, [7, 6])).toBe(2);
    expect(des.isShipSunk()).toBe(true);
    expect(board.hasAllShipSunk(des)).toBe(false);
  });
});
describe("All ship sunk", () => {
  test("Checking if all ship sunk and whether ship placement is right i.e not overlapping other ship and going out of board", () => {
    let des = new Ship("Destroyer", 2, 0, false);
    let sub = new Ship("Submarine", 3, 0, false);
    let cruiser = new Ship("Cruiser", 5, false);
    let ba = new Ship("battleShip", 4, false);
    let board = new GameBoard(10, 10);
    board.shipSinkCount = 5;
    board.createBoard();
    expect(board.placeShips(des, [6, 6], "vertical")).toStrictEqual([
      [6, 6],
      [7, 6],
    ]);
    expect(board.placeShips(sub, [6, 6], "vertical")).toStrictEqual(undefined);
    expect(board.placeShips(cruiser, [6, 9], "vertical")).toStrictEqual(
      undefined
    );
    expect(board.placeShips(ba, [-1, 6], "vertical")).toStrictEqual(undefined);
    expect(board.receiveAttack(sub, [6, 6])).toBe("Attack Missed");
    expect(board.hasAllShipSunk(des)).toBe(true);
  });
});
