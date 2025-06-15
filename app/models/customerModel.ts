import mongoose from "mongoose";
const CustomerSchema = new mongoose.Schema({
  name: String,
  address: { street: String, number: String, postCode: String },
  taxId: String,
});

CustomerSchema.virtual("actions", {
  ref: "Action",
  localField: "_id",
  foreignField: "customer",
});

CustomerSchema.set("toObject", { virtuals: true });
CustomerSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Customer", CustomerSchema);
