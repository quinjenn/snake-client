const net = require("net");
const { connect } = require("./client");

console.log("Connecting ...");
connect();

/* Supported Move Commands
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)*/
