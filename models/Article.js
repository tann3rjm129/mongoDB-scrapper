
var mongoose = require("mongoose");

// creates schema
var Schema = mongoose.Schema;

// article schema
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },

  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

var Article = mongoose.model("Article", ArticleSchema);

// Export Article model
module.exports = Article;