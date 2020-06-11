const express = require("express");
const router = express.Router();

const postCategory = require("../controllers/categoryController");

router.post("/", postCategory);

module.exports = router;
