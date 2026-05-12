// for tasting node.js
// console.log("Hello Node.js");
// console.log("Welcome to Node.js");
// let i;
// for (i = 0; i < 5; i++) {
//     console.log(i);
// }

// const { create } = require('domain');
const http = require('http');

http.createServer((req,res) => {
  res.write("hellow")
  res.end();
}).listen(1000)