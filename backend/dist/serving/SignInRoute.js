"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const passport_1 = __importDefault(require("passport"));
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("./security/config"));
const signInRoute = express_1.Router();
const router = () => {
    signInRoute
        .route("/signinform")
        .post(passport_1.default.authenticate("local", { session: false }), (req, res, next) => {
        let { _id, email, password, confirmPassword } = req.user;
        console.log(email, _id);
        const token = jsonwebtoken_1.default.sign({ id: email }, config_1.default.secret);
        return res.status(200).send({
            auth: true,
            token: token,
            message: "user found and loggoed in",
            id: _id,
        });
    });
    return signInRoute;
};
module.exports = router;
//{
//: "/",
// failureRedirect: "/login",
//failureFlash: true,
//}),
