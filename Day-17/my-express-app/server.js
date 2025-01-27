const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // Middleware

const TODO = [
  {
    title: "Wakeup in the morning!"
  }
]; // Initialize  

app.get('/tasks', function (req, res, next) {
  res.json(TODO);
});

app.post("/add-task", function (req, res, next) {
  const data = req.body.title;
  TODO.push({ title: data });
  res.json(TODO);
});

app.put("/:title/update-task", function (req, res, next) {
  const data = req.body.title;
  const title = req.params;

  const index = TODO.findIndex(function (item) {
    return item.title === title.title
  });
  TODO[index].title = data;
  res.json(TODO);
});

app.listen(8090, function () {
  console.log("My app is working at PORT-", 8090);
});