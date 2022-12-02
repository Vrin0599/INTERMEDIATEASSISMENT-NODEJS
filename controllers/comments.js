const db = require("../config/db");

const getComments = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = {
        text: "SELECT * FROM comments",
        values: [],
      };

      const response = await db.query(query);
      resolve(response.rows);
    } catch (err) {
      reject(err);
    }
  });
};

const publishComments = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = {
        text: "INSERT INTO comments (comments, blog_id, created_by, updated_by) VALUES ($1,$2,$3,$4) RETURNING *",
        values: [data.comments, data.blog_id, data.userId, data.userId],
      };

      const response = await db.query(query);
      resolve(response.rows[0]);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

module.exports = { getComments, publishComments };
