import express, { Request, Response, response } from "express";
import passport from "passport";
import e, { Router } from "express";
import jwt from "jsonwebtoken";
import config from "./security/config";

const signInRoute = Router();
const router = () => {
  signInRoute
    .route("/signinform")
    .post(
      passport.authenticate("local", { session: false }),
      (req: Request, res: Response, next) => {
        let { _id, email, password, confirmPassword } = req.user as {
          _id: string;
          email: string;
          password: string;
          confirmPassword: string;
        };

        console.log(email, _id);
        const token = jwt.sign({ id: email }, config.secret);
        res.status(200).send({
          auth: true,
          email: email,
          token: token,
          message: "user found and loggoed in",
          id: _id,
        });
      }
    );
  return signInRoute;
};

export = router;

//{
//: "/",
// failureRedirect: "/login",
//failureFlash: true,
//}),
