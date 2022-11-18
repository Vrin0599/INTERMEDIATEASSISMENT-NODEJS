constdb = require("../config/db");

const createUsers = (data) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(
        `INSERT INTO users (fullname, user_role, email) VALUES ('${data.fullname}', '${data.userRole}', '${data.email}')`,
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

module.exports = { createUsers };
