const db = require("../config/db");

const createSubscribers = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(data);
      const query = {
        text: "INSERT INTO subscribers (author_id, follower_id, status) VALUES ($1,$2,$3) Returning *",
        values: [data.author_id, data.follower_id, data.status],
      };

      const response = await db.query(query);
      resolve(response.rows);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { createSubscribers };
