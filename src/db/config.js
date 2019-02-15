const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.Promise = global.Promise;

// Connecting to the database
const connect = (dbUrl) => mongoose.connect(dbUrl, {useCreateIndex: true, useNewUrlParser: true});

module.exports = {
  connect: connect,
  userManager: User
}