const express = require("express");
const app = express();
const PostRoute = express.Router();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// Require Post model in our routes module
let Post = require("../models/Poll");

// Defined store route
PostRoute.route("/voters/newPoll:poll").post(function(req, res) {
  let post = new Post(req.params.poll);
  post
    .save()
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
PostRoute.route("/voters").get(function(req, res) {
  Post.find(function(err, posts) {
    if (err) {
      console.log(err);
    } else {
      res.json(posts);
    }
  });
});

PostRoute.route("/voters/:idp").get(function(req, res) {
  Post.findOne({ id_p: req.params.idp }, function(err, posts) {
    if (err) {
      console.log(err);
    } else {
      res.json(posts);
    }
  });
});

PostRoute.route("/voters/:idp::ida").put(function(req, res) {
  Post.findOneAndUpdate(
    { id_p: req.params.idp, "answers.id_a": req.params.ida },
    { $inc: { "answers.$.count": 1, count: 1 } },
    { returnOriginal: false },
    function(err, posts) {
      if (err) res.json(err);
      else {
        res.json(posts);
      }
    }
  );
});

/*PostRoute.route("/voters/newPoll/").post(function(req, res) {
  let newPoll = new Post();
  /!*newPoll= {id_p:req.params.idp};*!/
  Post.insertMany(newPoll, function(err, posts) {
    if (err) {
      console.log(err);
    } else {
      res.json(posts);
    }
  });
});*/

PostRoute.route("/delete/:id").get(function(req, res) {
  Post.findByIdAndRemove({ _id: req.params.id }, function(err, post) {
    if (err) res.json(err);
    else {
      res.json(req.params.id);
    }
  });
});

module.exports = PostRoute;
