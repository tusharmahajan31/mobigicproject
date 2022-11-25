
const router = require('express').Router();
const logic = require('./logic');


router.get('/', (req, res) => {
  res.json("Connected to router");
});


router.use('/', logic);


module.exports = router;