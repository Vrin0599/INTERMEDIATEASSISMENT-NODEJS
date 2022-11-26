const db = require("../config/db");

const createUsers = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.fullname || !data.email) {
        return reject("Please enter fullname  and email then proceed.");
      }
      const query = {
        text: "INSERT INTO users (fullname, email) VALUES ($1,$2)",
        values: [data.fullname, data.email],
      };

      const response = await db.query(query);
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { createUsers };
