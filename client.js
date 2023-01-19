// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  conn.on("connect", () => {
    console.log("You are now connected!"); // connect handler/callback function
    conn.write("Name: JAQ"); // name command
  });

  // incoming data
  conn.on("data", (data) => {
    console.log("server response", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

//export connect function
module.exports = { connect };
