const mongoose = require("mongoose");

const ProductDetailsSchema = require("./product_details").ProductDetailsSchema;
const productAttributesSchema = require("./product_attributes")
  .ProductAttributesSchema;

const ProductSchema = new mongoose.Schema({
  sku: String,
  details: ProductDetailsSchema,
  attributes: [productAttributesSchema],
  variants: [ProductVariantsSchema],
  images: [ImageSchema],
  category: CategorySchema,
  created_at: { type: Date, default: Date.now },
  published_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
  deleted_at: { type: Date, default: null },
});

const Product = mongoose.model("Product", ProductSchema);

// insert product

const createProduct = function (sku, title, productDetails, productAttributes) {
  const product = new Product({
    sku,
    title,
    product_details: productDetails,
    product_attributes: productAttributes,
  });
  return product.save();
};

module.exports = { Product, createProduct };
