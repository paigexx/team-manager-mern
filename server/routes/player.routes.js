const PlayerController = require("../controllers/player.controllers")


module.exports = app => {
    app.post("/api/player/create", PlayerController.createPlayer)
    app.get("/api/player", PlayerController.findAll)
    app.get("/api/player/:_id", PlayerController.onePlayer)
    app.put("/api/player/update/:_id", PlayerController.updatePlayer)
    app.delete("/api/player/delete/:_id", PlayerController.deletePlayer)
}