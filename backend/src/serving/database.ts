import mongoose = require("mongoose");
import * as bcrypt from "bcrypt";
import Debug from "debug";
const debug = Debug("database");
const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  confirmPassword: String,
});

export default mongoose.model("users", userSchema);
