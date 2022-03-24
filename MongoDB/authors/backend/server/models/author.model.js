const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A name is required"],
        minlength: [3, "Name most be atleast 3 characters"]
    }
},{timestamps: true})

const Author = mongoose.model("Author", AuthorSchema)

module.exports = Author;