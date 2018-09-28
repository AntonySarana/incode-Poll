const express = require('express');
const bodyParser = require('body-parser')
var fs = require("fs");


const app = express();
var cors = require('cors')


var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors());



app.get('/Poll',cors(corsOptions), function (req, res) {
  var content = fs.readFileSync("data.json", "utf8");
  var users = JSON.parse(content);
  res.send(users);
});

app.get('/Verify',cors(corsOptions), function (req, res) {
  return console.log("verify")
});

app.listen(process.env.PORT || 3001);