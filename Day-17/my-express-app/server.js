const express = require('express');
const bodyParser = require('body-parser');
const gettasks = require('./controllers/tasks/auth/get.tasks');
const addtasks = require('./controllers/tasks/auth/add.tasks');
const updatetasks = require('./controllers/tasks/auth/update.tasks');

const app = express();

app.use(bodyParser.json()); // Middleware

app.get('/tasks', gettasks);
app.post("/add-task", addtasks);
app.put("/:title/update-task", updatetasks);

app.listen(8090, function () {
  console.log("My app is working at PORT-", 8090);
});