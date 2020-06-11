const mongoose = require("mongoose");

const ProductAttributesSchema = new mongoose.Schema({}, { strict: false });

const ProductAttributes = mongoose.model(
  "ProductAttributes",
  ProductAttributesSchema
);

const createProductAttributes = (attributes) => {
  return ProductAttributes.insertMany(attributes);
};

module.exports = {
  ProductAttributes,
  ProductAttributesSchema,
  createProductAttributes,
};
