import mongoose from "mongoose";

const ActionSchema = new mongoose.Schema({
  contactDate: { type: Date, require: true },
  typeOfAction: { type: String, require: true }, //e.g., Phone Call, Meeting, Other (required)
  description: { type: String, require: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
});

module.exports = mongoose.model("Action", ActionSchema);
