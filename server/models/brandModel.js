const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  value: {
    type: String,
    unique: true,
    required: true,
  },
  image: {
    type: String,
  }
});

module.exports = mongoose.model('Brand', brandSchema);
