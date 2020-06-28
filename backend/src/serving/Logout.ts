import express, { Request, Response, response } from "express";
//import passport from "passport";
import { Router } from "express";

const logOutRoute = Router();

const router = () => {
  logOutRoute.route("/logout").get((req: Request, res: Response) => {
    req.logout();
    return res.status(200).send({ user: req.user });

    //res.status(200).send({
    //auth: false,
    // });
  });
  return logOutRoute;
};
export = router;
