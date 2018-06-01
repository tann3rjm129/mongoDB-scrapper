
var mongoose = require("mongoose");
// schema
var Schema = mongoose.Schema;
// note schema
var NoteSchema = new Schema({
  body: {
    type: String
  }
});

var Note = mongoose.model("Note", NoteSchema);
// export note
module.exports = Note;