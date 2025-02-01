const TODO = require("../data/todo");

const gettasks = (req, res, next) => {
    res.json(TODO);
};

module.exports = gettasks;