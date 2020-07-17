var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  parent: {
    type: String
  }
});

let Post = mongoose.model("Post", PostSchema);
module.exports = Post;
