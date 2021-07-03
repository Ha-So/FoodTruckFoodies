const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Truck = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    official_location: { type: Boolean, default: false },
    total_confirmed: { type: Number, default: 1 },
    time: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("trucks", Truck);
