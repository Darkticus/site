var express = require('express');
var router = express.Router();

const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;


/* GET home page. */
router.get('/', function(req, res, next) {
  User.findByPk(1)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving Tutorial with id=" + id
    });
  });
  /*res.render('index', { title: 'Express' });*/
});

module.exports = router;
