"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose = require("mongoose");
const express_1 = require("express");
const Appointmentdb_1 = __importDefault(require("./Appointmentdb"));
const getUser = express_1.Router();
const mongo = () => {
    getUser.route("/mong").get((req, res) => {
        (function getuser() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("dady ", req.body);
                const url = "mongodb://localhost:27017/Register";
                try {
                    let client = yield mongoose.connect(url, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                    });
                    yield Appointmentdb_1.default
                        .find({})
                        .then((result) => {
                        return res.send(result);
                    })
                        .catch((err) => res.send(err));
                }
                catch (error) {
                    console.log(error);
                }
            });
        })();
    });
    return getUser;
};
module.exports = mongo;
