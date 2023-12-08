var express = require("express");
const async = require("hbs/lib/async");
var category_model = require("../model/category");
var router = express.Router();

//show all category
router.get("/", async (req, res) => {
  var category_list = await category_model.find({});
  //res.send(category_list);
  res.render("category/index", { category_list });
});

router.get("/delete/:id", async (req, res) => {
  await category_model.findByIdAndDelete(req.params.id);
  res.redirect("/category");
});

router.get("/add", (req, res) => {
  res.render("category/add");
});
router.post("/add", async (req, res) => {
  var category = req.body;
  await category_model.create(category);
  res.redirect("/category");
});

router.get("/edit/:id", async (req, res) => {
  var id = req.params.id;
  var category = await category_model.findById(id);
  res.render("category/edit", { category });
});
router.post("/edit/:id", async (req, res) => {
  var id = req.params.id;
  var data = req.body;
  await category_model.findByIdAndUpdate(id, data);
  res.redirect("/category");
});

module.exports = router;
