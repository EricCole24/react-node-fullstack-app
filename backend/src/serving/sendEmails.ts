import mailgunLoader from "mailgun-js";

let mailgun = mailgunLoader({
  apiKey: "a4733cfe794a9abd31dfb2907df79f3e-1b6eb03d-c1c12415",
  domain: "sandboxc1a5eb6132ee4777a52dc98336b9d89e.mailgun.org",
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
