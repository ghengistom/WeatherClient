var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/tempStation', function(req, res, next) {
    res.sendFile('views/tempStation.ejs', {root: __dirname })
});

module.exports = router;
