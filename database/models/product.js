const mongoose = require("mongoose");
const ProductDetailsSchema = require("./product_details").ProductDetailsSchema;

const ProductSchema = new mongoose.Schema({
  sku: String,
  title: String,
  // price: Decimal128,
  // short_description: String,
  // created_at: Date,
  // published_at: Date,
  // updated_at: Date,
  // deleted_at: Date,
  product_details: ProductDetailsSchema,
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
