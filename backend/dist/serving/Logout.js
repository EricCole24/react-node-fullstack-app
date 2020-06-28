"use strict";
//import passport from "passport";
const express_1 = require("express");
const logOutRoute = express_1.Router();
const router = () => {
    logOutRoute.route("/logout").get((req, res) => {
        req.logout();
        return res.status(200).send({ user: req.user });
        //res.status(200).send({
        //auth: false,
        // });
    });
    return logOutRoute;
};
module.exports = router;
