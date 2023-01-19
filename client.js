// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });
  console.log("data");

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

//export connect function
module.exports = { connect };
