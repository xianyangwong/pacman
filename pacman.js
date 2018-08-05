// pacman.js
"use strict";

module.exports = class Pacman {
  constructor(x, y) {
    this.EAST = "EAST";
    this.SOUTH = "SOUTH";
    this.WEST = "WEST";
    this.NORTH = "NORTH";
    this.x = x;
    this.y = y;

    this.currentLocation = {
      x: null,
      y: null,
      f: null
    };
  }

  place(x, y, f) {
    if (x < this.x && x >= 0 && y < this.y && y >= 0) {
      this.currentLocation = { x, y, f };
    }
  }

  move() {
    switch (this.currentLocation.f) {
      case this.EAST:
        if (this.currentLocation.x < this.x - 1) {
          this.currentLocation.x += 1;
        }

        break;

      case this.SOUTH:
        if (this.currentLocation.y > 0) {
          this.currentLocation.y -= 1;
        }

        break;

      case this.WEST:
        if (this.currentLocation.x > 0) {
          this.currentLocation.x -= 1;
        }
        break;

      case this.NORTH:
        if (this.currentLocation.y < this.y - 1) {
          this.currentLocation.y += 1;
        }
        break;
    }
  }

  left() {
    switch (this.currentLocation.f) {
      case this.EAST:
        this.currentLocation.f = this.NORTH;
        break;

      case this.SOUTH:
        this.currentLocation.f = this.EAST;
        break;

      case this.WEST:
        this.currentLocation.f = this.SOUTH;
        break;

      case this.NORTH:
        this.currentLocation.f = this.WEST;
        break;
    }
  }

  right() {
    switch (this.currentLocation.f) {
      case this.EAST:
        this.currentLocation.f = this.SOUTH;
        break;

      case this.SOUTH:
        this.currentLocation.f = this.WEST;
        break;

      case this.WEST:
        this.currentLocation.f = this.NORTH;
        break;

      case this.NORTH:
        this.currentLocation.f = this.EAST;
        break;
    }
  }

  report() {
    console.log(JSON.stringify(this.currentLocation, null, 2));
  }
};
