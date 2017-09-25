const express = require('express');
const User = require('../models/user.model');
const passport = require('passport');


module.exports.get = (req, res, next) => {
  User.find(req.user._id)
      .then(user => res.status(200).json(user))
      .catch(err => next(err));
}

module.exports.edit = (req, res, next) => {
  delete req.body.passport;
  User.findByIdAndUpdate(req.user._id, { $set: req.body }, { new : true})
      .then(user => {
          if (!user) {
              res.status(404).json();
          } else {
              res.status(200).json(user)
          }
      })
      .catch(err => next(err));
}

module.exports.remove = (req, res, next) => {
  User.remove({ _id: req.user._id })
      .then(removed => {
        if (removed.result.n>0) {
          res.status(204).json({ message: ' User removed' });
        } else {
          res.status(404).json({ message: 'Not removed' });
        }
      })
      .catch(err => next(err));
}
