var express = require("express");
const cors = require('cors');
var app = express();

// Set the Server Port
var PORT  = process.env.PORT || 8080

var server = app.listen(PORT, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', 'localhost', port);
});


app.use(cors({
  origin: '*'
}));

app.get('/', function (req, res) {
  res.send('Our Server is Up and Running!')
})

//GET Date ENDPOINT
app.get('/openaikey', function (req, res) {
  console.log(process.env.API_KEY);
  const apiKey = {
    key: process.env.API_KEY
  }
  res.send(apiKey);
})
