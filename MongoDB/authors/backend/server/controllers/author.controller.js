const Author = require("../models/author.model");

const findOne = (req,res) => {
    Author.findOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didnt quite work", err}))
}

const deleteOne = (req,res) => {
    Author.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didnt quite work", err}))
    }

const findAll = (req,res) => {
    console.log(req.body)
        Author.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didnt quite work", err}))
    }

const createAuthor = (req,res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json({message: "that didnt quite work", err}))
    }

const updateOne = (req,res) => {
        Author.updateOne({_id: req.params._id}, req.body)
            .then(results => res.json(results))
            .catch(err => res.status(400).json({message: "that didnt quite work", err}))
    }

    module.exports = {
        findOne,
        findAll,
        deleteOne,
        createAuthor,
        updateOne,
    }