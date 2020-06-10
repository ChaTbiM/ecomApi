const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const anotherRoutes = require("./routes/index").anotherRoutes;
const productRoutes = require("./routes/index").productRoutes;

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
// connect db
const uri = process.env.DATABASE_URL;
const databaseConnection = mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
});
// .then((res) => console.log(res))
// .catch((err) => console.log(err));
// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/product", productRoutes);
app.use("/world", anotherRoutes);

// starting Server
app.listen(port, () => console.log(`listening to http://localhost:${port}`));
