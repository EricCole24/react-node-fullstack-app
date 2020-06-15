import passport from "passport";
import LocalStrategy from "passport-local";
import { comparePassword } from "./PasswordHash";
import mongoose = require("mongoose");
import user from "../database";
import { MongoClient } from "mongodb";
import jwt from "jsonwebtoken";
import config from "./config";

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(
  new LocalStrategy.Strategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      const url = "mongodb://localhost:27017";
      const dbName = "Users";
      (async function mongo() {
        let client;

        try {
          client = await MongoClient.connect(url);

          const db = client.db(dbName);
          const col = db.collection("users");

          const user = await col.findOne({ email });
          console.log();
          //console.log("meme ,", +password + " " + user.password);
          //let result = await comparePassword(password, user.password);
          //console.log("coal,", result);
          // if (!user) {
          // done(null, false, { message: "incorrect username" });
          // }

          if (user && comparePassword(password, user.password)) {
            //console.log("oooo", token);
            done(null, user);
          } else {
            done(null, false);
          }
          //return done(null, user);
        } catch (err) {
          console.log(err.stack);
        }
        // Close connection
        client?.close();
      })();
    }
  )
);
