import express from "express";
const app = express();
import mongoose from "mongoose";
const customerRoute = require("./routes/customerRoute");
const actionRoute = require("./routes/actionsRoute");
const PORT = 8080;
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crm"); // we connect to our database
mongoose;

app.use("/customers", customerRoute);
app.use("/actions", actionRoute);
app.listen(PORT, () => {
  console.log("The server started");
});
