const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: 'The email is required'
    },
    password: {
        type: String,
        required: 'The password is required'
    },
    firstName: String,
    lastName: String,
    url: String,
    phoneNo: String,
    address: String,
    linkedIn: String,
    instagram: String,
    pinterest: String,
    languages: [{
      name: String,
      level: {
        type: String,
        enum: ["Elementary", "Intermediate", "Advanced", "Mother Tongue"]
      }
    }],
    hardskills: [{
      name: String,
      level: {
        type: Number,
        enum: [1, 2, 3, 4]
      }
    }],
    softskills: [{
      name: String,
      level: {
        type: Number,
        enum: [1, 2, 3, 4]
      }
    }],
    education: [{
      name: String,
      from: Date,
      to: Date,
      title: String,
      description: String
    }],
    complementaryEducation: [{
      name: String,
      from: Date,
      to: Date,
      title: String,
      description: String
    }],
    experience: [{
      name: String,
      title: String,
      from: Date,
      to: Date,
      description: String
    }],
    profile: {
      type: String,
      max: 200
    },
    interests: [{ String }]
}, {timestamps: true});

userSchema.pre('save', function save(next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) { return next(err); }
        else {
            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) { return next(err); }
                else {
                    user.password = hash;
                    return next();
                }
            })
        }
    })
});

userSchema.methods.checkPassword = function (password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        cb(err, isMatch);
    });
}

const User = mongoose.model('User', userSchema);
module.exports = User;
