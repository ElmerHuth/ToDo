const Task = require('../models.task.js');

exports.getAllTasks = (req, res) => {
    res.json(Task.getAll());
}

exports.getTask = (req, res) => {
    const id = parseInt(req.params.id);
    res.json(tasks.filter((task) => task.id == id)[0]);
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