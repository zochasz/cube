const express = require('express');
const User = require('../models/user.model');
const Portfolio = require('../models/portfolio.model');
const passport = require('passport');


module.exports.getAll = (req, res, next) => {
  Portfolio.find({author: req.user._id})
      .then(portfolio => res.status(200).json(portfolio))
      .catch(err => next(err));
}

module.exports.create = (req, res, next) => {
  // const portfolio = Object.assign({}, req.body);
  const portfolio = req.body;
  portfolio.author = req.user._id;

  Portfolio.create(portfolio)
        .then(portfolio => {
          res.status(201).json(portfolio);
        })
        .catch(err => next(err));
}

module.exports.edit = (req, res, next) => {

  Portfolio.findByIdAndUpdate(req.params.id, { $set: req.body }, { new : true})
      .then(portfolio => {
          if (!portfolio) {
              res.status(404).json();
          } else {
              res.status(200).json(portfolio)
          }
      })
      .catch(err => next(err));
}

module.exports.remove = (req, res, next) => {
  Portfolio.remove({ _id: req.params.id })
      .then(removed => {
        if (removed.result.n>0) {
          res.status(204).json({ message: 'Porfolio removed' });
        } else {
          res.status(404).json({ message: 'Not removed' });
        }
      })
      .catch(err => next(err));
}

module.exports.getOne = (req, res, next) => {
  Portfolio.find({_id: req.params.id})
  .then(portfolio => res.status(200).json(portfolio))
  .catch(err => next(err));
}
