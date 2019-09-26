let express = require('express');
let controller = require('../controller/thing.controller');

let router = express.Router();

router.get('/', controller.index);

module.exports = router;
