import mailgunLoader from "mailgun-js";

let mailgun = mailgunLoader({
});
const sendEmail = (
  name: string,
  email: string,
  day: string,
  time: string,
  date: string
) => {
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

export default sendEmail;
