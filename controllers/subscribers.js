const db = require("../config/db");

const createSubscribers = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = {
        text: "INSERT INTO subscribers (author_id, follower_id, status) VALUES ($1,$2,$3) Returning *",
        values: [data.author_id, data.follower_id, data.status],
      };

      const response = await db.query(query);
      resolve(response.rows[0]);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

const getSubscribers = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = {
        text: "SELECT fullname, follower_id FROM subscribers LEFT JOIN users ON users.id = subscribers.author_id WHERE author_id= $1",
        values: [data.userId],
      };
      const response = await db.query(query);
      resolve(response.rows);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

module.exports = { createSubscribers, getSubscribers };
