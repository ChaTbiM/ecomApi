const mongoose = require("mongoose");

const ProductAttributeSchema = new mongoose.Schema({}, { strict: false });

const ProductAttribute = mongoose.model(
  "ProductAttribute",
  ProductAttributeSchema
);

const createProductAttribute = () => {
  const productAttribute = new ProductAttribute({
    name: "color",
    value: "red",
  });

  return productAttribute.save();
};

module.exports = {
  ProductAttribute,
  ProductAttributeSchema,
  createProductAttribute,
};
