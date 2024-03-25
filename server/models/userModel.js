const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please add a username"],
  },
  email: {
    type: String,
    required: [true, "Plewase add an email"],
    unique: [true, "Email address already taken"]
  },
    gender: {
    type: String,
    required: true,
    enum: ["male", "female"]
  },
  password: {
    type: String,
    required: [true, "Please add the user password"]
  },
  roles: [{
    type: String,
    ref: 'Role'
  }],
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);
