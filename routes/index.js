var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/callback', function(req, res) {
	console.log('called back', req.body);
});

module.exports = router;
