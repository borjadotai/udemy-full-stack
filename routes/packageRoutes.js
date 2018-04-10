const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = app => {

  app.get('/api/package/read', requireLogin, async (req, res) => {
    var book_id = req.param('bookId');  
    if (!req.user.readingBooks.includes(book_id)){
      req.user.readingBooks.push(book_id);
      const user = await req.user.save();
      res.send(user);
    } else {
      console.log('error: book already added.')
    }
  });

  app.get('/api/package/get', requireLogin, (req, res) => {
    var user_id = req.param('id');

    const getUserInfo = async (id) => {
      const existingUser = await User.findOne({ googleId: id });
    
      if (existingUser) {
        res.send(existingUser);
      } else {
        console.log('error, not existing user', user_id);
      }
      existingUser(id);
    }
    getUserInfo(user_id);
  });

};







