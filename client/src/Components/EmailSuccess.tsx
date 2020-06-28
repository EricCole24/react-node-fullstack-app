import React from "react";

const EmailSuccess: React.FC = () => {
  return (
    <div className="jumbotron container">
      <p>
        {" "}
        Dear customer, Thank you for scheduling an appointment with us. <br />A
        member of the team should be reaching out to you soon. <br />
        You should also receive an email shortly that confirms the appointment
        details
      </p>
    </div>
  );
};

export default EmailSuccess;
