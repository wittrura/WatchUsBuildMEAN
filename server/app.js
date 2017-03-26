"use strict";

let express = require("express");
let app = express();

app.use(express.static(__dirname + "/../src"));

app.get("/sports", (req, res) => {
  res.json(["Cycling", "Weightlifting"]);
});

app.listen(8181, () => console.log("listening on port 8181..."));
