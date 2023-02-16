let connection;
// listening for user input
// setup interface to handle user input from stdin
const setupInput = (conn) => {
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
  if (pressedKey === "\u0003") {
    process.exit();
  }
  // WASD Movement
  if (pressedKey === "w") {
    connection.write("Move: up");
  }
  if (pressedKey === "a") {
    connection.write("Move: left");
  }
  if (pressedKey === "s") {
    connection.write("Move: down");
  }
  if (pressedKey === "d") {
    connection.write("Move: right");
  }
  if (pressedKey === "z") {
    connection.write("Say: weee");
  }
  if (pressedKey === "x") {
    connection.write("Say: hiii");
  }
  if (pressedKey === "c") {
    connection.write("Say: byee");
  }
};
/* Supported Move Commands
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)*/

module.exports = { setupInput };
