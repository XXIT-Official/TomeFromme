var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test1', function(req, res, next) {
  res.render('test1', { title: 'Express' });
});

router.get('/test2', function(req, res, next) {
  res.render('test2', { title: 'Express' });
});
module.exports = router;
