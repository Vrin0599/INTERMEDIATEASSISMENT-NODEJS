const db = require("../config/db");

const getComments = () => {
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `SELECT * FROM comments where blog_id === ${id}`,
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results);
        }
      );
    } catch (err) {
      reject(err);
    }
  });
};

const publishComments = (data) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `INSERT INTO blogs (comments, blog_id, user_id) VALUES ('${data.comments}', '${data.blog_id}', '${data.user_id}')`,
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results);
        }
      );
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { getComments, publishComments };
