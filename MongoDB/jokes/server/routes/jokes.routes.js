const JokesController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes/getAll", JokesController.getAll);
    app.get("/api/jokes/:_id", JokesController.getOne);
    app.post("/api/jokes/create", JokesController.createJoke)
    app.patch("/api/jokes/:_id", JokesController.updateOne)
    app.delete("/api/jokes/:_id", JokesController.deleteOne)
}