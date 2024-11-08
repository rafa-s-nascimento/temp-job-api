const { required } = require("joi");
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company name"],
      minLength: 2,
      maxLength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      minLength: 2,
      maxLength: 100,
    },
    status: {
      type: String,
      enum: ["Interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
