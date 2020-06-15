import express, { Response, Request } from "express";
import Debug from "debug";
import chalk from "chalk";
import morgan from "morgan";
import { Router } from "express";
import mongoose = require("mongoose");
import passport from "passport";
import "./serving/security/tokens";
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";
import bodyParser from "body-parser";
const debug = Debug("app");

const app = express();
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: "library" }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
import signup = require("./serving/SignUpRoute");
import signin = require("./serving/SignInRoute");
import logout = require("./serving/Logout");

app.use(signup());
app.use(signin());
app.use(logout());

app.get("/", (req: Request, res: Response) => {
  console.log("hi");
  res.send("helllll world");
});

//});
app.listen(5000, () =>
  debug(`Example app listening at http://localhost: ${chalk.green(5000)}`)
);
