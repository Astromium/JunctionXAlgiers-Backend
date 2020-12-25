const mongoose = require("mongoose");


const resellerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  location: {
      type: [Number],
      required: true
  },
  bmsProducts: {
    type: [Object],
    required: true
  },
  competitorProducts: {
    type: [Object]
  },
  rating: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
  
});

const Reseller = mongoose.model("Reseller", resellerSchema);

module.exports = Reseller;
