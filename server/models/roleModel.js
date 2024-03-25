const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  value: {
    type: String,
    unique: true,
    default: "CLIENT"
  },
});

module.exports = mongoose.model('Role', roleSchema);
