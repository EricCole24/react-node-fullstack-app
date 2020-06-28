"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mailgun_js_1 = __importDefault(require("mailgun-js"));
let mailgun = mailgun_js_1.default({
    apiKey: "a4733cfe794a9abd31dfb2907df79f3e-1b6eb03d-c1c12415",
    domain: "sandboxc1a5eb6132ee4777a52dc98336b9d89e.mailgun.org",
});
const sendEmail = (name, email, day, time, date) => {
    const data = {
        from: "noreply@test.com",
        to: email,
        subject: `Appointment details for ${name}`,
        html: `<html> Hi <strong> ${name}</strong><br>
       Below are the details for the scheduled appintment<br>
       <strong>Time : ${time} <br></strong>
       <strong>Date : ${date} <br></strong>
       <strong>Day : ${day} <br></strong> <br>

       Have a lovely day!!
       
      
    </html>`,
    };
    return mailgun.messages().send(data);
};
exports.default = sendEmail;
