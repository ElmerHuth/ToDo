const Task = require('../models.task.js');

exports.getAllTasks = (req, res) => {
    res.json(Task.getAll());
}

exports.addTask = (req, res) => {
    Task.add(req);
}

exports.removeTask = (req, res) => {
    Task.remove(req);
}

exports.editTask = (req, res) => {
    Task.edit(req);
}