const db = require("../models/db");

const getAll = async () => {
  return await db.findAll();
};

const insert = async (user) => {
  await db.create(user);
};
module.exports = { getAll, insert };
