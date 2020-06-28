import express, { Response, Request } from "express";
import mongoose = require("mongoose");
import { Router } from "express";
import user from "./Appointmentdb";

const getUser = Router();
const mongo = () => {
  getUser.route("/mong").get((req, res) => {
    (async function getuser() {
      console.log("dady ", req.body);
      const url = "mongodb://localhost:27017/Register";
      try {
        let client = await mongoose.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        await user
          .find({})
          .then((result) => {
            return res.send(result);
          })
          .catch((err) => res.send(err));
      } catch (error) {
        console.log(error);
      }
    })();
  });
  return getUser;
};
export = mongo;
