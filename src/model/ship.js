class Ship {
  placedArray = [];
  isPlaced = false;
  static shipCount = 0;
  constructor(name, length, hit, isSunk) {
    this.name = name;
    this.length = length;
    this.hit = hit;
    this.isSunk = isSunk;
  }

  getHit() {
    this.hit++;
    return this.hit;
  }

  isShipSunk() {
    if (this.hit === this.length) {
      this.isSunk = true;
      return this.isSunk;
    } else {
      return this.isSunk;
    }
  }
}

export { Ship };
