import { Ship } from "../model/ship";

describe("Ship", () => {
  test("Carrier test", () => {
    let carrier = new Ship("carrier", 5, 0, false);
    expect(carrier.name).toBe("carrier");
    expect(carrier.isShipSunk()).toBe(false);
    expect(carrier.hit).toBe(0);
    expect(carrier.length).toBe(5);
    expect(carrier.getHit()).toBe(1);
    expect(carrier.getHit()).toBe(2);
    expect(carrier.getHit()).toBe(3);
    expect(carrier.getHit()).toBe(4);
    expect(carrier.getHit()).toBe(5);
    expect(carrier.isShipSunk()).toBe(true);
    expect(carrier.placedArray).toStrictEqual([]);
  });
});

describe("Ship", () => {
  test("Battleship test", () => {
    let battleship = new Ship("battleship", 4, 0, false);
    expect(battleship.name).toBe("battleship");
    expect(battleship.isShipSunk()).toBe(false);
    expect(battleship.hit).toBe(0);
    expect(battleship.length).toBe(4);
    expect(battleship.getHit()).toBe(1);
    expect(battleship.getHit()).toBe(2);
    expect(battleship.getHit()).toBe(3);
    expect(battleship.getHit()).toBe(4);
    expect(battleship.isShipSunk()).toBe(true);
    expect(battleship.placedArray).toStrictEqual([]);
  });
});

describe("Ship", () => {
  test("Cruiser test", () => {
    let cruiser = new Ship("cruiser", 3, 0, false);
    expect(cruiser.name).toBe("cruiser");
    expect(cruiser.isShipSunk()).toBe(false);
    expect(cruiser.hit).toBe(0);
    expect(cruiser.length).toBe(3);
    expect(cruiser.getHit()).toBe(1);
    expect(cruiser.getHit()).toBe(2);
    expect(cruiser.getHit()).toBe(3);
    expect(cruiser.isShipSunk()).toBe(true);
    expect(cruiser.placedArray).toStrictEqual([]);
  });
});

describe("Ship", () => {
  test("Submarine test", () => {
    let submarine = new Ship("submarine", 3, 0, false);
    expect(submarine.name).toBe("submarine");
    expect(submarine.isShipSunk()).toBe(false);
    expect(submarine.hit).toBe(0);
    expect(submarine.length).toBe(3);
    expect(submarine.getHit()).toBe(1);
    expect(submarine.getHit()).toBe(2);
    expect(submarine.getHit()).toBe(3);
    expect(submarine.isShipSunk()).toBe(true);
    expect(submarine.placedArray).toStrictEqual([]);
  });
});

describe("Ship", () => {
  test("Destroyer test", () => {
    let destroyer = new Ship("destroyer", 2, 0, false);
    expect(destroyer.name).toBe("destroyer");
    expect(destroyer.isShipSunk()).toBe(false);
    expect(destroyer.hit).toBe(0);
    expect(destroyer.length).toBe(2);
    expect(destroyer.getHit()).toBe(1);
    expect(destroyer.getHit()).toBe(2);
    expect(destroyer.isShipSunk()).toBe(true);
    expect(destroyer.placedArray).toStrictEqual([]);
  });
});
