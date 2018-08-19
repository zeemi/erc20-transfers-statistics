var router = require('express').Router();

router.use('/api', require('./statistics'));

module.exports = router;