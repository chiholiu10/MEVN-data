var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DataSchema = new Schema({
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

let Data = mongoose.model("Data", DataSchema);
module.exports = Data;
