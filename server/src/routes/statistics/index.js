var router = require('express').Router();
const config = require('../../config');
const getTokenTransferEvents = require('../../tokenEvents').getTokenTransferEvents;


router.get('/statistics/:token', (req, res) => {
  res.set('Content-Type', 'application/json');
  const windowsLimit = parseInt(req.query.limit, 10) || config.defaultWindowsLimit;
  const windowsArray = Array.from(Array(windowsLimit), () => 0);

  return getTokenTransferEvents(req.params.token, windowsLimit).then((data) => {

    var nextThreshold = data.start_block + config.statisticsBlocksWindowLength;
    var windowsIndex = 0;

    data.events.forEach((event) => {

      if (event.blockNumber >= nextThreshold) {
        nextThreshold = nextThreshold + config.statisticsBlocksWindowLength;
        windowsIndex = windowsIndex + 1;
      }

      windowsArray[windowsIndex] = windowsArray[windowsIndex] + 1;
    });

    return res.send({
      transfersPerWindow: windowsArray,
      window_length: config.statisticsBlocksWindowLength,
      start_block: data.start_block,
      start_timestamp: data.start_timestamp,
      end_block: data.end_block,
      end_timestamp: data.end_timestamp
    })
  });
});

module.exports = router;