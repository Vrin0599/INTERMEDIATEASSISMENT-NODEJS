const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/comments");

router.get("/", async (req, res, next) => {
  try {
    const response = await controllers.getComments();
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const response = await controllers.publishComments(req.body);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
