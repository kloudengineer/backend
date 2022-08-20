const mongoose = require("mongoose");

const sampleSchema = new mongoose.Schema(
  {
    sampleString: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sample", sampleSchema);