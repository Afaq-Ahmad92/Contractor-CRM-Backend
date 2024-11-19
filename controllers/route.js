const express = require("express");
const router = express.Router();

const userRoutes = require("./user/_routes");
const employRoutes = require("./employ/_routes");

//Api`s

router.use("/user", userRoutes);
router.use("/employ", employRoutes);

module.exports = router;
