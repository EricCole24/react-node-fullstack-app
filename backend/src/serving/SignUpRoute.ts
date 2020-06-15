import express, { Request, Response, response } from "express";
import { Router } from "express";
import { hashUserPassword } from "./security/PasswordHash";
import Debug from "debug";
import mongoose = require("mongoose");
import user from "./database";
import { MongoClient } from "mongodb";
//import hashUserPassword from "./PasswordHash";
const debug = Debug("app:SignUpRoute");

const signUpRoute = Router();

const router = () => {
  signUpRoute.route("/signupform").post((req: Request, res: Response) => {
    const { email, username, password, cpassword } = req.body;
    const url = "mongodb://localhost:27017/Users";
    (async function addUser() {
      try {
        let client = await mongoose.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        let hashedPassword = hashUserPassword(password);
        let hashedConfirmPassword = hashUserPassword(cpassword);
        let newUser = new user({
          email: email,
          username: username,
          password: hashedPassword,
          confirmPassword: hashedConfirmPassword,
        });

        user.countDocuments({ email: email }, async (err, result) => {
          if (err) {
            console.log("got an error");
            res.status(400).send(err);
          } else if (result === 0) {
            await newUser.save().then((result) => {
              console.log("kilerrrr", result);
              mongoose.connection.close();
            });
            console.log("result");
            return res.status(200).send("user data saved successfully");
          } else {
            return res.status(500).json({ message: "somethings broke" });
          }
        });
      } catch (error) {
        res.status(500).send("damn it broke");
      }
    })();
  });
  return signUpRoute;
};

export = router;
