const path = require("path");

const express = require("express");

const router = express.Router();

const {products} = require('./admin');

const rootDir = require('../util/path');

router.get("/", (req, res, next) => {
  res.render('shop', {prods: products, pageTitle: "Shop", path: "/"})

  // sending static files
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
