const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getAllTasks);
router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTask);
router.post('/tasks/:id', taskController.addTask);
router.put('/tasks/:id', taskController.editTask);
router.delete('/tasks/:id', taskController.removeTask);

module.exports = router;

/*
let tasks = [
  {
    id: 1,
    name: 'name1',
    description: 'description1'
  },
  {
    id: 2,
    name: 'name2',
    description: 'description2'
  },
  {
    id: 3,
    name: 'name3',
    description: 'description3'
  },
];
*/
/* GET home page.
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send();
});

router.get('/all', function(req, res, next) {
  res.json(tasks);
});

router.get('/id=:id', function(req, res, next) {
  const id = parseInt(req.params.id);
  const returnval = tasks.filter((task) => task.id == id)[0];
  res.json(returnval);
}); */
