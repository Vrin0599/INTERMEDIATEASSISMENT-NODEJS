const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/subscribers");

router.get("/", async (req, res, next) => {
  try {
    const response = await controllers.getSubscribers(req.body);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const response = await controllers.createSubscribers(req.body);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
