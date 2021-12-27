const mongoose = require("mongoose")

const PlayerSchema = new mongoose.Schema({
    playerName : {
        type: String, 
        required: [true, "Player name is required"],
        minlength: [2, "Player name must have a minimum length of 2 characters. " ]
    }, 
    position: {
        type: String
    },
}, {timestamps: true})

const Player = mongoose.model("Player", PlayerSchema)

module.exports = Player 