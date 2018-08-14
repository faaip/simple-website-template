var express = require('express');
var router = express.Router();

// http://localhost:7000/
router.get('/', function(req, res, next) {
    res.render('pages/index');
});

module.exports = router;