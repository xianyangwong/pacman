# Pacman Simulator

Pacman Simulator is a simple node js application which take command from json file with features below.

  - Place: Place pacman on the map
  - Move: Move pacman forward in the direction it is currently facing 
  - Left and Right: Rotate pacman 90 degrees in the specified direction without changing position
  - Report: Announce the current location and facing of pacman


### How to run

Pacman Simulator requires [Node.js](https://nodejs.org/) v6+ to run.

```sh
$ cd pacman
$ npm install -d
$ node ./index.js ./input.json
```

### JSON input example

Pacman Simulator requires [Node.js](https://nodejs.org/) v6+ to run.

```json
[
    "PLACE 0,0,NORTH",
    "MOVE",
    "LEFT",
    "RIGHT",
    "REPORT"
]
```