const postCategoryService = require("../services/categoryServices");
const category = require("../database/models/category");
const { post } = require("../routes/anotherRoutes");

const postCategory = async (req, res, next) => {
  try {
    const categoryInformation = req.body;
    const category = await postCategoryService(categoryInformation);
    res.status(201).send(category);
  } catch (error) {
    res.status(201).send("category failure");
  }
};

// const getAllCategories = async (req,res,next)=>{}

module.exports = postCategory;
