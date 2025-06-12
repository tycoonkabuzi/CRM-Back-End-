import mongoose from "mongoose";

const ActionSchema = new mongoose.Schema(
  {
    typeOfAction: { type: String, require: true }, //e.g., Phone Call, Meeting, Other (required)
    description: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Action", ActionSchema);
