var express = require('express');
var app = express();

app.get('/', function (req, res) {
  //  .use(nocache) // Prevents caching of *only* this request
 res.send('Hey world, this is very beginning of implementing CICD pipeline - VERSION 11');

});

//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
