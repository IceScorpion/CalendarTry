var express = require('express');
var router = express.Router();
 
// use session auth to secure the angular app files
router.get('/', function (req, res) {
    res.render('rating');
});
 
 
module.exports = router;