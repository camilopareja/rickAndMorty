var express = require('express');
var index = require('../controllers/indexController')
var router = express.Router();

/* GET home page. */
router.get('/', index.personajeRandom);

module.exports = router;
