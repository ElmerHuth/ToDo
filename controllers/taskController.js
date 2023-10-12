const Task = require('../models/task.js');

exports.getAllTasks = (req, res) => {
    res.json(Task.getAll());
}

exports.getTask = (req, res) => {
    res.json(Task.get(req.params.id));
}

exports.addTask = (req, res) => {
    Task.add(req.body.description);
    res.json(Task.getAll());
}

exports.removeTask = (req, res) => {
    Task.remove(Task.get(req.params.id));
    res.json(Task.getAll());
}

exports.editTask = (req, res) => {
    Task.edit(req.params.id, req.body.description);
    res.json(Task.getAll());
}