const mysql = require("mysql");

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: "project_mobigic",
});
con.connect((err) => {
  if (err) throw err;
  console.log("Connected Successfully !!!!!!!");
})

module.exports = con;