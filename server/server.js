const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./config/DB'),
  passport = require('passport');

const app = express();
app.use(passport.initialize());
require('./passport')(passport);

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);
const postroutes = require('./routes/PostRoute');
const userroutes = require('./routes/UserRoute');

app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 3001;

app.use('/', postroutes);
app.use('/', userroutes);

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});