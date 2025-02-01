const TODO = require("../data/todo");


const updatetasks = function (req, res, next) {
        const data = req.body.title;
        const title = req.params;
      
        const index = TODO.findIndex(function (item) {
          return item.title === title.title
        });
        TODO[index].title = data;
        res.json(TODO);
      }

module.exports = updatetasks;