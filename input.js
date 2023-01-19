let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  // stores the active TCP connection object
  connection = conn;
  const stdin = process.stdin; // event listener for sdin object
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // event listener for stdin
  stdin.on("data", handleUserInput);

  return stdin;
};

// data is received from stdin
// particular key is pressed on the keyboard input
const handleUserInput = (pressedKey) => {
  // WASD Movement
  if (key === "w") {
    console.log("Move: up");
  }
  if (key === "a") {
    console.log("Move: left");
  }
  if (key === "s") {
    console.log("Move: down");
  }
  if (key === "d") {
    console.log("Move: right");
  }
  if (key === "z") {
    console.log("Say: weee");
  }
  if (key === "x") {
    console.log("Say: hiii");
  }
  if (key === "c") {
    console.log("Say: byee");
  }
};
/* Supported Move Commands
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)*/

module.exports = { setupInput };
