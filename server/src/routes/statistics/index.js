var router = require('express').Router();
const config = require('../../config');
const getTokenTransferEvents = require('../../tokenEvents').getTokenTransferEvents;


router.get('/statistics/:token', (req, res) => {
  res.set('Content-Type', 'application/json');
  const limit = req.query.limit || config.defaultWindowsLimit;
  getTokenTransferEvents(req.params.token, limit).then((events) => {
    return res.send({eventsLength: events.length})
  });

});


module.exports = router;