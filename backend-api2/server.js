// Load .env file if it exist.
require('dotenv').config()

// Load in modules. 
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

// Allow all CORS.
app.use(cors({
  origin: '*'
}));

// Parse any JSON.
app.use(bodyParser.json());

// Routing to controllers
app.use(require('./api/message'));
app.use(require('./api/health'));

// Catch all unhandled requests.
app.use('*', function (req, res, next) {
  res.sendStatus(400);
})

// Start the Express server
var port = process.env.PORT || 19020;
var server = app.listen(port, function () {
  var port = server.address().port;
  console.log(`### Server listening on ${server.address().port}`);
});