const net = require("net");
const { connect } = require("./client");

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin; // event listener for sdin object
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // event listener for stdin
  stdin.on("data", handleUserInput);

  return stdin;
};

// data is received from stdin // particular key is pressed on the keyboard input
const handleUserInput = (pressedKey) => {};

/* Supported Move Commands
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)*/
