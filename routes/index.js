const express = require("express");
const router = express.Router();

const blogRouters = require("./blogs");
const userRouters = require("./users");
const commentRouters = require("./comments");
const subscriberRouters = require("./subscribers");

router.use("/blogs", blogRouters);
router.use("/users", userRouters);
router.use("/comments", commentRouters);
router.use("/subscribers", subscriberRouters);

module.exports = router;
