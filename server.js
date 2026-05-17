// for tasting node.js
// console.log("Hello Node.js");
// console.log("Welcome to Node.js");
// let i;
// for (i = 0; i < 5; i++) {
//     console.log(i);
// }

// const { create } = require('domain');
// const http = require('http');

// http.createServer((req,res) => {
  // res.write("<h1>Hello World</h1>");
  // res.end();
// }).listen(1000)     



express = require('express');
app = express();

app.listen(2000 , () => {
    console.log("running on port 2000");
})