import express, { Response, Request } from "express";
import mongoose = require("mongoose");
import { Router } from "express";
import user from "./Appointmentdb";
import sendEmail from "./sendEmails";
const auth = Router();
/*const uSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    planguage: String,
    appointmentDate: String,
    appointmentDay: String,
    appointmentTime: String,
    document: String,
  },
  { timestamps: { createdAt: "created_at" } }
);
let user = mongoose.model("register", uSchema);
*/
const trymongo = () => {
  auth.route("/bookappointment").post((req, res) => {
    const { name, email, language, date, day, time, document } = req.body as {
      name: string;
      email: string;
      language: string;
      date: string;
      day: string;
      time: string;
      document: string;
    };
    let newDate = date.split("T")[0];
    const url = "mongodb://localhost:27017/Register";
    (async function finduser() {
      try {
        let client = await mongoose.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        let newUser = new user({
          name: name,
          email: email,
          planguage: language,
          appointmentDate: newDate,
          appointmentDay: day,
          appointmentTime: time,
          document: document,
        });

        user.countDocuments(
          {
            appointmentDate: newDate,
            appointmentDay: day,
            appointmentTime: time,
          },
          async (err, result) => {
            if (err) {
              console.log("got an error");
              res.status(400).send(err);
            } else if (result === 0) {
              await newUser
                .save()
                .then(async (result) => {
                  mongoose.connection.close();
                  await sendEmail(name, email, day, time, newDate);
                  return res.send({
                    responseType: "ok",
                    responseBody: {
                      responseMessage: "success",
                    },
                  });
                })
                .catch((error) => {
                  return res.send(error);
                });
            } else {
              return res.send({
                responseType: "error",
                responseBody: {
                  responseMessage: "Time, Date and Day not available",
                },
              });
            }
          }
        );
      } catch (err) {
        console.log(err);
      }
    })();
  });
  return auth;
};
export = trymongo;
