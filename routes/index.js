var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
  res.render('index');
})

router.get('/homepage', function(req, res) {
  res.render('homepage');
})


router.get('/intro', function(req, res) {
  res.render('intro');
})

router.get('/opt1', function(req, res) {
  res.render('opt1');
})

router.get('/opt2', function(req, res) {
  res.render('opt2');
})

router.get('/opt3', function(req, res) {
  res.render('opt3');
})

router.get('/opt4', function(req, res) {
  res.render('opt4');
})

router.get('/opt5', function(req, res) {
  res.render('opt5');
})

router.get('/opt6', function(req, res) {
  res.render('opt6');
})
module.exports = router;
