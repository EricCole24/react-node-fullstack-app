"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/Users";
let db = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//const ans = users.findOne({email:"ericol"})
