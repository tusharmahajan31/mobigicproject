if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const Router = require("./Router");
const cors = require("cors");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Router);


app.listen(3000);