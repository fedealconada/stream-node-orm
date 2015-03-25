var FeedManager = require('./FeedManager.js');
var Mongoose = require('./ORM/Mongoose.js');
var config = require('./config.js');
var settings = config();

module.exports.FeedManager = new FeedManager(settings);
module.exports.mongoose = Mongoose;