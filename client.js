const { Server } = require("http");
const net = require("net");
const { connected } = require("process");

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log("You are connected!!");
    console.log(data.toString());
  });

  
  conn.on('connect', function(){
    conn.write("Name: LBT");
    conn.write("Move: up")
    
  });

  return conn;
};

module.exports = connect;

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)