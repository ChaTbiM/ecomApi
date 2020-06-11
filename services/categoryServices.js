const createCategory = require("../database/models/category").createCategory;

const postCategory = ({ name, parent }) => {
  return createCategory(name, parent);
};

module.exports = postCategory;
