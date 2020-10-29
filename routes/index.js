var express = require("express");
var router = express.Router();

const db = require("../models");
const User = db.users;
const Article = db.articles;
const Product = db.products;
const Op = db.Sequelize.Op;

/* GET home page. */
router.get("/", function (req, res, next) {
  Product.findAll()
    .then((data) => {
      //res.send(data);
res.render('index', { data: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
  
});

router.get("/:url", function (req, res, next) {
  Article.findOne({where:{url:req.params.url}})
          .then(data => {
          res.render('article',{data:data});
  });
  //console.log(req.params.url);  
});




module.exports = router;
