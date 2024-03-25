const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    },
    description: {
    type: String,
    },
    price: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    countInStock: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
    },
    brand: [{
        type: String,
        ref: 'Brand'
      }],
    // numReviews: {
    //     type: Number,
    //     required: true,
    // },
}, {timestamps: true});

module.exports = mongoose.model('Product', productSchema);
