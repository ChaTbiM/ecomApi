const postProductService = require("../services/productService")
  .postProductService;

const postProduct = async (req, res, next) => {
  try {
    await postProductService();

    res.status(201).send("product success");
    next();
  } catch (err) {
    res.status(201).send("product failure");
  }
};

module.exports = postProduct;
