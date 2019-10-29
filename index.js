var express = require('express');
var app = express();

app.get('/', function (req, res) {
  //  .use(nocache) // Prevents caching of *only* this request
 res.send('hey CSP world, this is very beginning of implementing CICD piplinew latest and new updates 80');

});

//listen to port 3000 by default
app.listen(process.env.PORT || 3001);
 
module.exports = app;
