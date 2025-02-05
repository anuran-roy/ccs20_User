const mongoose = require("mongoose");
const subSchema = new mongoose.Schema(
  {
    questionId: {
      type: mongoose.Types.ObjectId,
      ref: "question",
    },
    solution: [String],
  },
  { _id: false }
);
const resSchema = new mongoose.Schema({
  startTime: Number,
  endTime: Number,
  data: [subSchema],
});

module.exports = mongoose.model("response", resSchema);
