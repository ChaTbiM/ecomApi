const createProductDetails = require("../database/models/product_details")
  .createProductDetails;
const createProduct = require("../database/models/product").createProduct;
const createProductAttribute = require("../database/models/product_attribute")
  .createProductAttribute;

// interact with database or external services

// postProductService Async/Await Version
const postProductService = async () => {
  const productAttribute = await createProductAttribute();
  const productDetails = await createProductDetails("price", "111$");

  return await createProduct("IPOD2008PINK", productDetails, productAttribute);
};

module.exports = { postProductService };
