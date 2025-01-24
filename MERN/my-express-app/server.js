// THIS WILL BOOTSTRAP MY APPLICATION
const express = require('express')

const { upperCase } = require("upper-case")

const app = express()

app.get('/my-first-api', function (req, res, next) {
  const TO_DO = [
    {
      title: upperCase("Wakeup")
    },
    {
      title: "Go to gym"
    },
    {
      title: "Go to office"
    },
  ];

  res.json(TO_DO);
});

app.listen(8090, function () {
  console.log("My app is working at PORT-", 8090);
});