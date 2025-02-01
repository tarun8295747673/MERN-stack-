const TODO = require("../data/todo");

const addtasks = function (req, res, next) {
        const data = req.body.title;
        TODO.push({ title: data });
        res.json(TODO);
    }

module.exports = addtasks;
