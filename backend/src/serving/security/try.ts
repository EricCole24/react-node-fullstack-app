import mongoose = require("mongoose");
import users from "../database";

const url = "mongodb://localhost:27017/Users";
let db = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//const ans = users.findOne({email:"ericol"})
