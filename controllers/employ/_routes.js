const express = require("express");
const user = require("./employ");
const auth = require("../../middelwares/auth");

const router = express.Router();

router.get("/", auth, (req, res) => {
  res.status(200).json([]);
});

module.exports = router;
