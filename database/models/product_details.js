const mongoose = require("mongoose");

const ProductDetailsSchema = new mongoose.Schema({
  name: String, // Attribute name
  description: String,
});

const ProductDetails = mongoose.model("ProductDetails", ProductDetailsSchema);

// create product DEtails
const createProductDetails = function (name, description) {
  const productDetails = new ProductDetails({ name, description });

  return productDetails.save();
};

module.exports = { ProductDetails, ProductDetailsSchema, createProductDetails };
