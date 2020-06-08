const mongoose = require("mongoose");

const ProductDetailsSchema = new mongoose.Schema({
  name: String, // Attribute name
  description: String,
});

const ProductDetails = mongoose.model("ProductDetails", ProductDetailsSchema);

module.exports = { ProductDetails, ProductDetailsSchema };
