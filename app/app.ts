const express = require("express");
const app = express();
import mongoose from "mongoose";
const customerRoute = require("./routes/customerRoute");
const PORT = 8080;
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crm"); // we connect to our database
mongoose;

app.use("/", customerRoute);
app.listen(PORT, () => {
  console.log("The server started");
});
