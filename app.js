const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/index");
const port = 3000;

app.use("/", router);

if(process.env.NODE_ENV !== "production"){
  require('dotenv').config();
}

const uri = process.env.DATABASE_URL;

mongoose.connect(uri , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
}).then(res => console.log(res))
.catch(err => console.log(err));


app.listen(port, () =>
  console.log(`${process.env.DATABASE_URL}`)
);
