const createProductDetails = require("../database/models/product_details")
  .createProductDetails;
const createProduct = require("../database/models/product").createProduct;

// interact with database or external services

const postProductService = async () => {
  return await createProductDetails("color", "black")
    .then((productDetails) => {
      console.log("created new PRoduct Details", productDetails);

      return createProduct("IPOD2008PINK", "IPOD", productDetails);
    })
    .then((product) => console.log("create new product", product));
};

module.exports = { postProductService };
