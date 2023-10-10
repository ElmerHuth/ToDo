var express = require('express');
var router = express.Router();

const tasks = [
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

/* GET home page. */
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
});

module.exports = router;
