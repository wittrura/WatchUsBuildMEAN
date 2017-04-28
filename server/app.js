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
    res.json({"data": docs});
  });
});

app.get("/sports/:name", (req, res) => {
  let sportName = req.params.name;
  console.log("Sport name: ", sportName);
  let sport = {
    // "name": "Cycling",
    "name": sportName,
    "goldMedals": [{
      "division": "Men's Sprint",
      "country": "UK",
      "year": 2012
    }, {
      "division": "Women's Sprint",
      "country": "Australia",
      "year": 2012
    }]
  };
  res.json({"data": sport});
});

app.listen(8181, () => console.log("listening on port 8181..."));
