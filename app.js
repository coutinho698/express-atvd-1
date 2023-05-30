const express = require("express");
const app = express();

let contador = 0;
let incrementar1=0;
let incrementar5=0;

app.get("/contador", function (req, res) {
  res.send({ contador });
});

app.get("/incrementar1", function (req, res) {
    contador++;
    incrementar1++;
    res.send({ contador });
  });

  app.get("/incrementar5", function (req, res) {
    incrementar5++;
    contador += 5;
    res.send({ contador });
  });

  app.get("/relatorio", function (req, res) {


    res.send({ contador, incrementar1, incrementar5 });
  });

app.listen(3000);