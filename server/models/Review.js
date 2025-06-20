
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  bookId: String,
  reviewer: String,
  comment: String,
  rating: Number
});

module.exports = mongoose.model('Review', reviewSchema);
