const express = require('express');
const volleyball = require('volleyball');

const app = express();

app.use(volleyball);

app.use(express.static(`${__dirname}/public`));

const pusheens = [{
  name: 'Scribble Pusheen',
  image: 'http://68.media.tumblr.com/tumblr_m5mlt6a0EH1qhy6c9o1_400.gif'
}, {
  name: 'Cheetos Pusheen',
  image: 'http://68.media.tumblr.com/tumblr_lhlrmysKTU1qhy6c9o1_400.gif'
}, {
  name: 'Lazy Pusheen',
  image: 'http://68.media.tumblr.com/tumblr_lzzo5mbgWH1qhy6c9o1_r1_400.gif'
}, {
  name: 'Too Hot Pusheen',
  image: 'http://68.media.tumblr.com/tumblr_m6gpp528yc1qhy6c9o1_400.gif'
}, {
  name: 'Gangnam Pusheen',
  image: 'http://68.media.tumblr.com/tumblr_m9hbpdSJIX1qhy6c9o1_400.gif'
}];

app.get('/api/pusheens', function (req, res) {
  res.json(pusheens);
});

app.get('/api/pusheens/:pusheenName', function (req, res) {
  const foundPusheen = pusheens.find(function (elem) {
    return elem.name === req.params.pusheenName;
  });
  if (foundPusheen) res.json(foundPusheen);
  else res.status(404).end();
});

const port = 1337;
app.listen(port, function () {
  console.log('Awww yeah...listening on port', port);
});
