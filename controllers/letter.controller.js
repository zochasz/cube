const express = require('express');
const User = require('../models/user.model');
const passport = require('passport');

module.exports.getAll = (req, res, next) => {
  Project.find({author: req.user._id})
      .then(project => res.status(200).json(project))
      .catch(err => next(err));
}

module.exports.create = (req, res, next) => {
  // const project = Object.assign({}, req.body);
  const project = req.body;
  project.author = req.user._id;

  Project.create(project)
        .then(project => {
          res.status(201).json(project);
        })
        .catch(err => next(err));
}

module.exports.edit = (req, res, next) => {

  Project.findByIdAndUpdate(req.params.id, { $set: req.body }, { new : true})
      .then(project => {
          if (!project) {
              res.status(404).json();
          } else {
              res.status(200).json(project)
          }
      })
      .catch(err => next(err));
}

module.exports.remove = (req, res, next) => {
  Project.remove({ _id: req.params.id })
      .then(removed => {
        if (removed.result.n>0) {
          res.status(204).json({ message: ' Project removed' });
        } else {
          res.status(404).json({ message: 'Not removed' });
        }
      })
      .catch(err => next(err));
}

module.exports.getOne = (req, res, next) => {
  Project.find({_id: req.params.id})
  .then(project => res.status(200).json(project))
  .catch(err => next(err));
}
