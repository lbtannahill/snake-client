
const connect = require("./client.js");
const { setupInput } = require("./input.js");

  

console.log("Connecting ...");


setupInput(connect(console.log('You are connected!')));
