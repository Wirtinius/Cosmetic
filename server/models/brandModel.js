const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  value: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = mongoose.model('Brand', brandSchema);
