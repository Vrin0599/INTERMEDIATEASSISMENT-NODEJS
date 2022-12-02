const db = require("../config/db");

const createBlogs = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.title || !data.content || !data.userId) {
        return reject(
          "Please, check whether you have entered title, content & ID, then proceed."
        );
      }
      const query = {
        text: "INSERT INTO blogs (title, content, created_by, updated_by) VALUES ($1,$2,$3,$4) RETURNING *",
        values: [data.title, data.content, data.userId, data.userId],
      };

      const response = await db.query(query);

      const subscriberEmailQuery = {
        text: "SELECT us.email FROM subscribers as subs LEFT JOIN users as us on us.id = subs.follower_id WHERE subs.author_id = $1",
        values: [data.userId],
      };
      const responseSubscribers = await db.query(subscriberEmailQuery);

      resolve({
        insert: response.rows[0],
        subscribers: responseSubscribers.rows,
      });
    } catch (err) {
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

      resolve(response.rows[0]);
    } catch (err) {
      reject(err);
    }
  });
};

const getBlogs = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = {
        text: "SELECT bg.title, bg.content, count(cmt.id) as comment_count FROM blogs as bg left join comments as cmt on bg.id = cmt.blog_id GROUP BY bg.title, bg.content",
        values: [],
      };

      const response = await db.query(query);
      resolve(response.rows);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

const getBlogById = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = {
        text: "SELECT title, content FROM blogs WHERE id = $1",
        values: [data.blog_id],
      };

      const response = await db.query(query);
      resolve(response.rows);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

module.exports = { createBlogs, updateBlogs, getBlogs, getBlogById };
