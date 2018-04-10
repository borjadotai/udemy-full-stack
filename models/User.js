const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  readingBooks: [String],
  wishList: [String]
});

mongoose.model('users', userSchema);
