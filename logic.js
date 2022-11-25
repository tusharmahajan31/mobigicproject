const con = require("./data");
const app = require('express').Router();


app.get('/get', (req, res) => {
  con.connect(function (err) {
    con.query("SELECT * FROM user", function (err, result) {
      if (err)
        throw err;
      else
        res.json(result);
      Console.log(result);
    });
  });
})


app.post('/post', checkNotAuthenticated, (req, res) => {

  const Name = req.body.fullname;
  const Email = req.body.email;
  const Password = req.body.password;


  con.connect(function (err) {
    con.query(
      `INSERT INTO user (fullname,email,password) VALUES ('${Name}','${Email}','${Password}')`,
      function (err, result) {
        if (err)
          throw err;
        else
          res.json('Registration successfully!');
      });
  });
})



function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect("/login")
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/")
  }
  next()
}


module.exports = app;



