const db = require("../config/db");

const getBlogs = () => {
  return new Promise((resolve, reject) => {
    try {
      db.query("SELECT * FROM blogs", (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    } catch (err) {
      reject(err);
    }
  });
};

const createBlogs = (data) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `INSERT INTO blogs (title, content, user_id) VALUES ('${data.title}', '${data.content}', '${data.user_id}')`,
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results);
        }
      );
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

const updateBlogs = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { title, content, id } = data;
      let response = null;

      if (!id) {
        return reject("Please send me id");
      }

      if (title) {
        response = await db.query("UPDATE blogs SET title = $1 WHERE id = $2", [
          title,
          id,
        ]);
      }

      if (content) {
        response = await db.query(
          "UPDATE blogs SET content = $1 WHERE id = $2",
          [content, id]
        );
      }

      resolve(response);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

module.exports = { getBlogs, createBlogs, updateBlogs };
