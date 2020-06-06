const express = require("express");
const router = express.Router();

// home page
router.get("/", function (req, res) {
  res.send("hello world");
});

module.exports = router;
