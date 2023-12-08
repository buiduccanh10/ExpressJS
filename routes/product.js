var express = require("express");
const async = require("hbs/lib/async");
var product_model = require("../model/product");
const category_model = require("../model/category");
const { mongo } = require("mongoose");
var router = express.Router();

router.get("/", async (req, res) => {
  var product_list = await product_model.find({}).populate("category");
  //res.send(product_list);
  res.render("product/index", { product_list });
});

router.get("/add", async (req, res) => {
  var category_list = await category_model.find({});
  res.render("product/add", { category_list });
});
router.post("/add", async (req, res) => {
  var product = req.body;
  await product_model.create(product);
  res.redirect("/product");
});

router.get("/edit/:id", async (req, res) => {
  var id = req.params.id;
  var product = await product_model.findById(id).populate("category");
  var category_list = await category_model.find({});
  res.render("product/edit", { product, category_list });
});

router.post("/edit/:id", async (req, res) => {
  var id = req.params.id;
  var data = req.body;
  await product_model.findByIdAndUpdate(id, data);
  res.redirect("/product");
});

router.get("/delete/:id", async (req, res) => {
  await product_model.findByIdAndDelete(req.params.id);
  res.redirect("/product");
});

module.exports = router;
