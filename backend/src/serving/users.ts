import express, { Response, Request } from "express";
import Debug from "debug";
import { Router } from "express";
const auth = express.Router();
import cors from "cors";

auth.use(cors());
auth.post("/signupform", (req: Request, res: Response) => {
  const data = req.body.email;
  console.log(data);
});

export default auth;
