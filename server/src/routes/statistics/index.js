var router = require('express').Router();
const config = require('../../config');
const getTokenTransferEvents = require('../../tokenEvents').getTokenTransferEvents;


router.get('/statistics/:token', (req, res) => {
  res.set('Content-Type', 'application/json');
  const windowsLimit = parseInt(req.query.limit, 10) || config.defaultWindowsLimit;
  const windowsArray = Array.from(Array(windowsLimit), () => 0);

  return getTokenTransferEvents(req.params.token, windowsLimit).then((data) => {
    data.events.forEach((event, index) => {
      const windowsIndex = Math.floor((event.blockNumber - data.start_block) / config.statisticsBlocksWindowLength);
      windowsArray[windowsIndex] = windowsArray[windowsIndex] + 1;
    });

    return res.send(windowsArray)
    return res.send(data)
  });
});


module.exports = router;