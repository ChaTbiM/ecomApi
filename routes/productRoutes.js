const express = require("express");
const router = express.Router();

const postProduct = require("../controllers/productController");

router.post("/", postProduct);

module.exports = router;
