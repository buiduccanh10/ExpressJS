var mongoose = require("mongoose");
var product_schema = mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  category: { type: mongoose.SchemaTypes.ObjectId, ref: 'category' },
});
var product_model = mongoose.model("product", product_schema, "product");
module.exports = product_model;
