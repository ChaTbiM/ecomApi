const postProductService = require("../services/productServices")
  .postProductService;

const postProduct = async (req, res, next) => {
  try {
    const productInformation = req.body;
    const product = await postProductService(productInformation);
    res.status(201).send(product);
  } catch (err) {
    res.status(201).send("product failure");
  }
};

module.exports = postProduct;
