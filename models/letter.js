const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

const letterSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email:String,
    ukey:String,
    date:String,
    letters:Array
},{collection:'tomein2020'});

module.exports = mongoose.model("Letter", letterSchema);
