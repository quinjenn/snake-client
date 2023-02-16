// importing module ip/port
const net = require("net");
const { IP, PORT } = require("./constants");

// connection with game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("connect", () => {
    console.log("You are now connected!"); // connect handler/callback function
    conn.write("Name: JAQ"); // name command
  });

  // incoming data/messages from the server
  conn.on("data", (data) => {
    console.log("server response", data);
  });

  // interpret/encode incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

//export connect function
module.exports = { connect };
