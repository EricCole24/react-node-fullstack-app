import mongoose = require("mongoose");
import * as bcrypt from "bcrypt";
import Debug from "debug";
const debug = Debug("database");
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: String,
    confirmPassword: String,
  },
  { timestamps: { createdAt: "created_at" } }
);
export default mongoose.model("users", userSchema);
