const express = require("express");

const app = express();

// http://localhost:3000/sum?a=1&b=2

// query params

// app.get("/sum", (req, res) => {
//     const a = parseInt(req.query.a);  // string '1' -> 1
//     const b = parseInt(req.query.b); // string '2' -> 2

//     const sum = a + b;

//     res.json({
//         ans: sum
//     })
// })

// path params

app.get("/", (req, res) => {
    res.sendFile("/Users/rehanjaswal/dev/web-dev/calculator-http-server/index.html");
})

app.get("/sum/:a/:b", (req, res) => {
  const a = parseInt(req.params.a); 
  const b = parseInt(req.params.b);
  
  const sum = a + b;

  res.json({
    ans: sum
  });
});

app.listen(3000);