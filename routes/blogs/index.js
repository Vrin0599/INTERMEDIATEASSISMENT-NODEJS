const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/blogs");

router.get("/", async (req, res, next) => {
  try {
    const response = await controllers.getBlogs();
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const response = await controllers.createBlogs(req.body);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/update", async (req, res, next) => {
  try {
    const response = await controllers.updateBlogs(req.body);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
