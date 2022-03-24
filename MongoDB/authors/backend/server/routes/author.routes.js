const { findAll, findOne, createAuthor, deleteOne, updateOne} = require("../controllers/author.controller")

module.exports = app => {
    app.route("/api/authors").get(findAll).post(createAuthor)
    app.route("/api/authors/:_id").get(findOne).patch(updateOne).delete(deleteOne)
}