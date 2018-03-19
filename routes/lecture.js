var express = require('express');
var router = express.Router();

/* GET all lectures list. */
router.get('/lectures', function(req, res, next) {
    res.send('respond with a resource');
});

/* GET lectures list by keyword  */
router.get('/lectures/:searchTerm', function(req, res, next) {
    res.send('respond with a resource');
});

/* GET a single lecture by ID  */
router.get('/lectures/:id', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;