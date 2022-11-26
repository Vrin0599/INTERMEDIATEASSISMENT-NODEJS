const { getBlogs, createBlogs } = require("./blogs");
const { createUsers } = require("./users");
const { getComments, publishComments } = require("./comments");
const { createSubscribers, getSubscribers } = require("./subscribers");

module.exports = {
  getBlogs,
  createBlogs,
  createUsers,
  getComments,
  publishComments,
  createSubscribers,
  getSubscribers,
};
