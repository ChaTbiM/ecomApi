const mongoose = require("mongoose");

const ProductDetailsSchema = new mongoose.Schema({
  title: String,
  description: String,
  short_description: String,
  in_stock: { type: Boolean, default: false },
  stock_quantity: Number,
  price: mongoose.Decimal128,
});

const ProductDetails = mongoose.model("ProductDetails", ProductDetailsSchema);

// create product DEtails
const createProductDetails = function (
  title,
  description,
  short_description,
  in_stock,
  stock_quantity,
  price
) {
  const productDetails = new ProductDetails({
    title,
    description,
    short_description,
    in_stock,
    stock_quantity,
    price,
  });

  return productDetails.save();
};

module.exports = { ProductDetails, ProductDetailsSchema, createProductDetails };
