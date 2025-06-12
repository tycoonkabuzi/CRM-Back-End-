import mongoose from "mongoose";
const CustomerSchema = new mongoose.Schema({
  name: String,
  address: { street: String, number: String, postCode: String },
  taxId: String,
});

module.exports = mongoose.model("Customer", CustomerSchema);
