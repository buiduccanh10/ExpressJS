var mongoose = require("mongoose");
var category_schema = mongoose.Schema({
  name: String,
  description: String
});
var category_model = mongoose.model("category", category_schema, "category");
module.exports = category_model;
