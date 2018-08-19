var router = require('express').Router();
const config = require('../../config');
const getTokenTransferEvents = require('../../tokenEvents').getTokenTransferEvents;


router.get('/statistics/:token', (req, res) => {
  res.set('Content-Type', 'application/json');
  const windowsLimit = req.query.limit || config.defaultWindowsLimit;
  const promisea = getTokenTransferEvents(req.params.token, windowsLimit)
  return promisea.then((data) => {
    return res.send(data)
  });
});


module.exports = router;