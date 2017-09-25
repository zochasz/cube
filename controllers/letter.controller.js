const express = require('express');
const User = require('../models/user.model');
const Letter = require('../models/letter.model');
const passport = require('passport');


module.exports.getAll = (req, res, next) => {
  Letter.find({author: req.user._id})
        .then(letter => res.status(200).json(letter))
        .catch(err => next(err));
}

module.exports.create = (req, res, next) => {
  // const letter = Object.assign({}, req.body);
  const letter = req.body;
  letter.author = req.user._id;

  Letter.create(letter)
        .then(letter => {
          res.status(201).json(letter);
        })
        .catch(err => next(err));
}

module.exports.edit = (req, res, next) => {

  Letter.findByIdAndUpdate(req.params.id, { $set: req.body }, { new : true})
        .then(letter => {
            if (!letter) {
                res.status(404).json();
            } else {
                res.status(200).json(letter)
            }
        })
        .catch(err => next(err));
}

module.exports.remove = (req, res, next) => {
  Letter.remove({ _id: req.params.id })
        .then(removed => {
          if (removed.result.n>0) {
            res.status(204).json({ message: 'Letter removed' });
          } else {
            res.status(404).json({ message: 'Not removed' });
          }
        })
        .catch(err => next(err));
}

module.exports.getOne = (req, res, next) => {
  Letter.find({_id: req.params.id})
        .then(letter => res.status(200).json(letter))
        .catch(err => next(err));
}
