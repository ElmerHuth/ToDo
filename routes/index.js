var express = require('express');
var router = express.Router();

let tasks = [
  {
    name: 'name1',
    description: 'description1'
  },
  {
    name: 'name2',
    description: 'description2'
  },
  {
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
  //res.render('index', { title: 'Express' });
  res.json(tasks);
});

module.exports = router;
