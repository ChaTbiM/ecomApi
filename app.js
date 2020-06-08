const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/index");
const port = 3000;

const ProductDetails = require("./database/models/product_details")
  .ProductDetails;
const Product = require("./database/models/product");

app.use("/", router);

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const uri = process.env.DATABASE_URL;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
// Define DB queries
const createProductDetails = (name, description) => {
  const productDetails = new ProductDetails({ name, description });

  return productDetails.save();
};

const createProduct = (sku, title, productDetails) => {
  const product = new Product({ sku, title, productDetails });

  return product.save();
};

// execute DB queries

createProductDetails("color", "black")
  .then((productDetails) => {
    console.log("created new PRoduct Details", productDetails);

    return createProduct("IPOD2008PINK", "IPOD", productDetails);
  })
  .then((product) => console.log("product created", product))
  .catch((err) => console.log("error =>>>", err));

// starting Server
app.listen(port, () => console.log(`${process.env.DATABASE_URL}`));
