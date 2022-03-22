const Jokes = require("../models/jokes.model");

const getAll = (req,res) => {
    Jokes.find()
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "that didnt quite work", err}))
}

const getOne = (req,res) => {
    Jokes.findOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "that didnt quite work", err}))
}

const createJoke = (req,res) => {
    Jokes.create(req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "that didnt quite work", err}))
}

const updateOne = (req,res) => {
    Jokes.updateOne({_id: req.params._id}, req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "that didnt quite work", err}))
}

const deleteOne = (req,res) => {
    Jokes.deleteOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "that didnt quite work", err}))
}


module.exports = {
    getAll,
    getOne,
    createJoke,
    updateOne,
    deleteOne
}