const express = require("express");
const router = express.Router();

router.post("/", function (req, res) {
  console.log(req.body);
  res.send("response");
});

module.exports = router;
