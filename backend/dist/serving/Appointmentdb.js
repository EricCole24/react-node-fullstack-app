"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const uSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    planguage: String,
    appointmentDate: String,
    appointmentDay: String,
    appointmentTime: String,
    document: String,
}, { timestamps: { createdAt: "created_at" } });
exports.default = mongoose.model("register", uSchema);
