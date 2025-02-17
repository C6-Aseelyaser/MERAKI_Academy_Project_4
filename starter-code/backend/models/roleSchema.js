const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const roleSchema = new mongoose.Schema({
  role: { type: String, required: true },
  permissions: [{ type: String }],
});

module.exports = mongoose.model("role", roleSchema);