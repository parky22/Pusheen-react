const express = require('express');
const volleyball = require('volleyball');

const app = express();

app.use(volleyball);

app.use(express.static(`${__dirname}/public`));

const puppies = [{
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

app.get('/api/puppies', function (req, res) {
  res.json(puppies);
});

app.get('/api/puppies/:puppyName', function (req, res) {
  const foundPuppy = puppies.find(function (elem) {
    return elem.name === req.params.puppyName;
  });
  if (foundPuppy) res.json(foundPuppy);
  else res.status(404).end();
});

const port = 1337;
app.listen(port, function () {
  console.log('Awww yeah...listening on port', port);
});
