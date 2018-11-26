var express = require('express');
var router = express.Router();

// http://localhost:7000/example
router.get('/', function (req, res, next) {
    if (error.response.status === 404) {
        return next(error.response);
    }
});

module.exports = router;