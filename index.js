"use strict";


if (process.argv.length < 3) {
    console.log("JSON input file is required");
    process.exit(1);
}

const MAP_SIZE_X = 5;
const MAP_SIZE_Y = 5;
const inputs = require(`./${process.argv[2]}`);
const Pacman = require("./pacman.js");

var pacman = new Pacman(MAP_SIZE_X, MAP_SIZE_Y);

inputs.forEach(i => {
  var command = i.split(" ");
  command[0] = command[0].toUpperCase();
  var location = [];
  if (command.length == 2) {
    location = command[1].split(",");
  }

  switch (command[0]) {
    case "PLACE":
      if (location.length == 3) {
        pacman.place(parseInt(location[0]), parseInt(location[1]), location[2]);
      }
      break;

    case "MOVE":
      pacman.move();
      break;

    case "LEFT":
      pacman.left();
      break;

    case "RIGHT":
      pacman.right();
      break;

    case "REPORT":
      pacman.report();
      break;

    default:
      break;
  }
});