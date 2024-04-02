import { Ship } from "../model/ship";
import { GameBoard } from "../model/gameBoard";
import { Player } from "../model/player";

describe("Creating Player as Human", () => {
  test("Player as human Test", () => {
    let destroyer = new Ship("destroyer", 2, 0, false);
    let submarine = new Ship("submarine", 3, 0, false);
    let cruiser = new Ship("cruiser", 3, 0, false);
    let battleship = new Ship("battleship", 4, 0, false);
    let carrier = new Ship("carrier", 5, 0, false);

    let destroyerAi = new Ship("destroyer", 2, 0, false);
    let human = new Player("human");
    let computer = new Player("computer");
    const humanBoard = human.getPlayerBoard();
    const computerBoard = computer.getPlayerBoard();

    //creating mock for Math.Random
    global.Math.random = () => 1;

    computer.placementOfShipByPlayer(destroyerAi);

    expect(humanBoard.length).toBe(10);
    humanBoard.forEach((col) => {
      expect(col.length).toBe(10);
    });
    humanBoard.forEach((row) => {
      row.forEach((element) => {
        expect(element).toBe(null);
      });
    });
    expect(human.type).toEqual("human");
    expect(human.getOrientation("horizontal")).toBe("horizontal");
    expect(human.getOrientation("vertical")).toBe("vertical");
    expect(
      human.placementOfShipByPlayer(destroyer, [6, 6], "vertical")
    ).toStrictEqual([
      [6, 6],
      [7, 6],
    ]);
    expect(
      human.placementOfShipByPlayer(submarine, [5, 3], "vertical")
    ).toStrictEqual([
      [5, 3],
      [6, 3],
      [7, 3],
    ]);
    expect(
      human.placementOfShipByPlayer(cruiser, [8, 3], "horizontal")
    ).toStrictEqual([
      [8, 3],
      [8, 4],
      [8, 5],
    ]);
    expect(
      human.placementOfShipByPlayer(battleship, [1, 2], "horizontal")
    ).toStrictEqual([
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
    ]);

    expect(
      human.placementOfShipByPlayer(carrier, [0, 3], "horizontal")
    ).toStrictEqual([
      [0, 3],
      [0, 4],
      [0, 5],
      [0, 6],
      [0, 7],
    ]);

    expect(human.shipAttack(computerBoard, [1, 1]).length).toBe(10);
    human.shipAttack(computerBoard, [8, 8]);
    expect(computerBoard[8][8]).toBe("x");
    Player.activePlayer = "computer";
    expect(human.shipAttack(computerBoard, [2, 3])).toBe(false);
  });
});

describe("Creating Player Class test to test static variable and method", () => {
  test("Testing for Player Class", () => {
    Player.activePlayer = "human";
    expect(Player.activePlayer).toBe("human");
    Player.switchPlayerTurn();
    expect(Player.activePlayer).toBe("computer");
    Player.switchPlayerTurn();
    expect(Player.activePlayer).toBe("human");
  });
});

describe("Creating Player as Computer", () => {
  test("Player as Computer Test", () => {
    let human = new Player("human");
    let computer = new Player("computer");
    const humanBoard = human.getPlayerBoard();
    const computerBoard = computer.getPlayerBoard();
    let destroyer = new Ship("destroyer", 2, 0, false);
    global.Math.random = () => 0.5;

    expect(computerBoard.length).toBe(10);
    computerBoard.forEach((col) => {
      expect(col.length).toBe(10);
    });
    computerBoard.forEach((row) => {
      row.forEach((element) => {
        expect(element).toBe(null);
      });
    });
    expect(computer.type).toEqual("computer");
    expect(computer.getOrientation()).toEqual("horizontal");
    Player.activePlayer = "computer";
    human.placementOfShipByPlayer(destroyer, [5, 5], "horizontal");
    computer.shipAttack(humanBoard, [5, 5]);
    expect(humanBoard[5][5]).toBe("x");
    Player.activePlayer = "human";
    expect(computer.shipAttack(humanBoard, [2, 3])).toBe(false);
  });
});

describe("Ship Placement by computer", () => {
  test("checking placement of ship by Computer", () => {
    let destroyerAi = new Ship("destroyer", 2, 0, false);
    let submarineAi = new Ship("submarine", 3, 0, false);
    let cruiserAi = new Ship("cruiser", 3, 0, false);
    let battleshipAi = new Ship("battleship", 4, 0, false);
    let carrierAi = new Ship("carrier", 5, 0, false);

    let computer = new Player("computer");
    computer.getPlayerBoard();

    expect(computer.placementOfShipByPlayer(destroyerAi)).toStrictEqual([
      [4, 4],
      [4, 5],
    ]);
    global.Math.random = () => 0.2;
    expect(computer.placementOfShipByPlayer(submarineAi)).toStrictEqual([
      [1, 1],
      [2, 1],
      [3, 1],
    ]);
    global.Math.random = () => 0.3;
    expect(computer.placementOfShipByPlayer(carrierAi)).toStrictEqual([
      [2, 2],
      [3, 2],
      [4, 2],
      [5, 2],
      [6, 2],
    ]);
    global.Math.random = () => 0.4;
    expect(computer.placementOfShipByPlayer(cruiserAi)).toStrictEqual([
      [3, 3],
      [4, 3],
      [5, 3],
    ]);
    global.Math.random = () => 0.7;
    expect(computer.placementOfShipByPlayer(battleshipAi)).toStrictEqual([
      [5, 5],
      [5, 6],
      [5, 7],
      [5, 8],
    ]);
  });
});
