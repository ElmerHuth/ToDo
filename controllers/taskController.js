const Task = require('../models/task.js');

exports.getAllTasks = (req, res) => {
    res.json(Task.getAll());
}

exports.getTask = (req, res) => {
    res.json(Task.get(parseInt(req.params.id)));
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