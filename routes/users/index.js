const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/users");

router.post("/create", async (req, res, next) => {
  try {
    const response = await controllers.createUsers(req.body);
    if (response.rowCount === 1) {
      res.status(200).send({
        message: "Rows updated successfully.",
      });
    } else {
      res.status(500).send({
        message: "No rows updated, Try again!",
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
