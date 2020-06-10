const createProductDetails = require("../database/models/product_details")
  .createProductDetails;
const createProduct = require("../database/models/product").createProduct;
const createProductAttribute = require("../database/models/product_attribute")
  .createProductAttribute;

// interact with database or external services

// const postProductService = async () => {
//   return await createProductDetails("color", "black")
//     .then((productDetails) => {
//       console.log("created new PRoduct Details", productDetails);

//       return createProduct("IPOD2008PINK", "IPOD", productDetails);
//     })
//     .then((product) => console.log("create new product", product));
// };

// postProductService Promises Version
const postProductService = () => {
  return Promise.all([
    createProductAttribute(),
    createProductDetails("color", "yellow"),
  ])
    .then(([productAttribute, productDetails]) => {
      return createProduct("IPOD2008PINK", productDetails, productAttribute);
    })
    .then((product) => console.log(product));
};
module.exports = { postProductService };
