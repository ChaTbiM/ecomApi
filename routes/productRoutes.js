const express = require("express");
const router = express.Router();
const postProduct = require("../controllers/productController");

router.get("/", postProduct);

module.exports = router;
