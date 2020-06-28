import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps {
  name: string;
}

const BookAppointment: React.FC<IProps> = ({ history }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    language: "Python",
    date: new Date(),
    day: "Monday",
    time: "9:00 AM",
    document: "",
  });
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
  });
  const [bookederror, setBookedError] = useState({
    appointmenterror: "",
  });
  const formIsValid = () => {
    let nameError = "";
    let emailError = "";
    if (!user.name) {
      nameError = "Name cannot be empty";
    }
    if (!user.email) {
      emailError = "Email cannot be empty";
    }
    if (nameError || emailError) {
      setError({
        nameError: nameError,
        emailError: emailError,
      });
      return false;
    }
    return true;
  };
  useEffect(() => {
    if (localStorage.length === 0) {
      history.push("/");
    }
  }, []);
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (formIsValid()) {
      const url = "http://localhost:5000/bookappointment";
      try {
        let response = await axios({
          method: "post",
          url: url,
          data: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }).then((result) => {
          if (result.data.responseBody.responseMessage === "success") {
            setUser({
              name: "",
              email: "",
              language: "Python",
              date: new Date(),
              day: "Monday",
              time: "",
              document: "",
            });
            return history.push("/emailsuccess");
          } else {
            let bookerror = result.data.responseBody.responseMessage;
            setBookedError({
              appointmenterror: bookerror,
            });
            return setUser({
              name: "",
              email: "",
              language: "Python",
              date: new Date(),
              day: "Monday",
              time: "",
              document: "",
            });
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleDateChange = (date: any) => {
    setUser({ ...user, date: date });
  };
  return (
    <div className="wrapper">
      <form className="container jumbotron" onSubmit={handleSubmit}>
        <div style={{ fontSize: 12, color: "red" }}>
          {bookederror.appointmenterror}
        </div>
        <div className="form-group ">
          <label htmlFor="name">Name</label>
          <div className="field">
            <input
              id="name"
              type="text"
              name="name"
              className="form-control"
              value={user.name}
              onChange={handleFormChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>{error.nameError}</div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div className="field">
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              value={user.email}
              onChange={handleFormChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>{error.emailError}</div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="language">Programming Language</label>
          <div className="field">
            <select
              id="language"
              name="language"
              className="form-control"
              value={user.language}
              onChange={handleSelectChange}
            >
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="Javascript">Javascript</option>
              <option value="Html">HTML</option>
              <option value="C++">C++</option>
              <option value="Swift">Swift</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="day">Appointment Day</label>
          <div className="field">
            <select
              id="day"
              name="day"
              className="form-control"
              value={user.day}
              onChange={handleSelectChange}
            >
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="time">Appointment Time</label>
          <div className="field">
            <select
              id="time"
              name="time"
              className="form-control"
              value={user.time}
              onChange={handleSelectChange}
            >
              <option value="9:00 AM">9:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="date" style={{ display: "block" }}>
            Appointment Date
          </label>
          <DatePicker
            selected={user.date}
            onChange={handleDateChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="document">Document</label>
          <div className="field">
            <input
              id="document"
              type="file"
              name="document"
              value={user.document}
              onChange={handleFormChange}
            />
          </div>
        </div>
        <input
          type="submit"
          id="sub"
          value="Confirm"
          className="btn btn-danger"
          style={{
            padding: "0.2em 0em",
            marginLeft: "350px",
            width: "15%",
            marginTop: "10px",
            color: "black",
            backgroundColor: "orange",
          }}
        />
      </form>
    </div>
  );
};

export default BookAppointment;
