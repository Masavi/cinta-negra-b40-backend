const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const usersSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  password: {
    type: String,
  }
});

usersSchema.pre('save', function(next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });
  });
});

usersSchema.methods.comparePassword = function(candidatePassword) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return false
      return isMatch;
  });
};

const Users = mongoose.model('User', usersSchema);

module.exports = Users;
