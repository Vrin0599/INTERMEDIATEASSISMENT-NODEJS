const { getBlogs } = require("./blogs");

module.exports = {
  getBlogs,
};

const { createBlogs } = require("./blogs");

module.exports = {
  createBlogs,
};

const { createUsers } = require("./users");

module.exports = {
  createUsers,
};

const { getComments } = require("./comments");

module.exports = {
  getComments,
};

const { publishComments } = require("./comments");

module.exports = {
  publishComments,
};
