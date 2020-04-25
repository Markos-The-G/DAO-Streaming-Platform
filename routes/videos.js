var express = require('express');
var router = express.Router();



router.post('/:hash', function (req, res, next) {

  res.send("nig");
})

module.exports = router;