const express = require('express');
const bp = require('body-parser');
const request = require('request');
const app = express();
app.use(bp.urlencoded({extended: true}));
app.listen(process.env.PORT || 3000, function () {
  console.log("Running!");
});

app.use(express.static("public"));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  let username = req.body.email;
  let password = req.body.password;
  console.log(username, password);
});
