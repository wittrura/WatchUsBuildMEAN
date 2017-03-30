"use strict";

let express = require("express");
let app = express();

let mongoUtil = require('./mongoUtil');
mongoUtil.connect();

// support for cross-origin resource sharing
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + "/../src"));

app.get("/sports", (req, res) => {
  let sports = mongoUtil.sports();
  sports.find({}).toArray((err, docs) => {
    // console.log(JSON.stringify(docs));
    res.json({"data": docs});
  });

  // res.json({"data": [
  //   {name: "Weightlifting"},
  //   {name: "Cycling"}
  // ]});
});

app.listen(8181, () => console.log("listening on port 8181..."));
