const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rolesSchema = new Schema({
    title: {
      type: String,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
});

const Roles = mongoose.model('Roles', rolesSchema);

module.exports = { Roles, rolesSchema };