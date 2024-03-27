const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  value: {
    type: String,
    unique: true,
    required: true,
  },
  image: {
    type: String,
  }
});

module.exports = mongoose.model('Category', categorySchema);
