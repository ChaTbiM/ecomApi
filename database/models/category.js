const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  parent: {
    type: String,
    default: "/",
  },
});

const Category = mongoose.model("Category", CategorySchema);

const createCategory = (name, parent) => {
  const category = new Category({ name, parent });
  return category.save();
};

module.exports = { CategorySchema, Category, createCategory };
