const express = require("express");
const router = express.Router();

const blogRouters = require("./blogs");
const userRouters = require("./users");
const commentRouters = require("./comments");

router.use("/blogs", blogRouters);
router.use("/users", userRouters);
router.use("/comments", commentRouters);

module.exports = router;
