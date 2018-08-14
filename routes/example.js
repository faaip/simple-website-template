var express = require('express');
var router = express.Router();
var client = require('../services/contentfulClient').client;

// http://localhost:7000/example
router.get('/', function(req, res, next) {
    client.getEntries()
    .then(function (entries) {
        res.render('pages/example', {entries: entries.items});
    }).catch(function(error) {
        if(error.response.status === 404) {
            return next(error.response);
        }
        else {
            res.render('pages/example', {});
        }
    });
});

module.exports = router;