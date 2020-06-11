const createProductDetails = require("../database/models/product_details")
  .createProductDetails;
const createProduct = require("../database/models/product").createProduct;
const createProductAttributes = require("../database/models/product_attributes")
  .createProductAttributes;

// interact with database or external services

// postProductService Async/Await Version
const postProductService = async ({ product, details, attributes }) => {
  const { sku } = product;
  const {
    title,
    description,
    short_description,
    in_stock,
    stock_quantity,
    price,
  } = details;

  const productDetails = await createProductDetails(
    title,
    description,
    short_description,
    in_stock,
    stock_quantity,
    price
  );
  const productAttributes = await createProductAttributes(attributes);

  return await createProduct(sku, productDetails, productAttributes);
};

module.exports = { postProductService };
