const Player = require("../models/player.models")
// change the model in the controllers

module.exports = {
    createPlayer: (req, res) => {
    Player.create(req.body)
        .then((data) => res.json({ results: data }))
        .catch((err) => res.json(err.errors));
    },    
    findAll: (req, res) => {
    Player.find()
        .then((data) => res.json({ results: data }))
        .catch((err) => res.json(err.errors));
    },    
    onePlayer: (req, res) => {
    Player.findOne({ _id: req.params._id })
        .then((data) => res.json({ results: data }))
        .catch((err) => res.json(err.errors));
    },    
    updatePlayer: (req, res) => {
    Player.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true })
        .then((data) => res.json({ results: data }))
        .catch((err) => res.json(err.errors));
    },

    deletePlayer: (req, res) => {
    Player.deleteOne({ _id: req.params._id })
        .then((data) => res.json({ results: data }))
        .catch((err) => res.json(err.errors));
    },
};
