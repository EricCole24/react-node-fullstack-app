import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
interface IDetailsState {
  appointment: {
    name: string;
    appointmentDate: string;
    appointmentTime: string;
    appointmentDay: string;
    planguage: string;
    _id: string;
    age: string;
    email: string;
  }[];
  email: string;
}
interface IDetailasProps {}
export default class Details extends React.Component<
  IDetailasProps,
  IDetailsState
> {
  constructor(props: IDetailasProps) {
    super(props);
    this.state = {
      appointment: [],
      email: "",
    };
  }
  getData = async () => {
    let email = JSON.parse(localStorage.getItem("user") as string);
    let personalEmail: string = email.email;
    const url = "http://localhost:5000/mong";
    await axios
      .get(url)
      .then((response) => {
        const data = response.data;

        this.setState({ appointment: data, email: personalEmail });
      })
      .catch(() => {
        throw new Error("invalid output");
      });
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    const personalDetails = this.state.appointment.filter(
      (person) => person.email === this.state.email
    );
    if (!personalDetails.length)
      return (
        <div className="container">
          <h1>No appointment scheduled yet? Please schedule one</h1>
        </div>
      );
    return (
      <div className="container">
        <table className="table table-striped">
          <caption>List of my appointment schedule</caption>
          <thead>
            <tr className="bg-danger">
              <th>Date</th>
              <th>Day</th>
              <th>Time</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>

          {personalDetails.map((person, index) => {
            return (
              <tbody key={person._id}>
                <tr>
                  <td>{person.appointmentDate}</td>
                  <td>{person.appointmentDay}</td>
                  <td>{person.appointmentTime}</td>
                  <td>
                    <Link
                      to={`${person._id}/detail`}
                      className="btn btn-outline-info shadow-sm"
                    >
                      Get Details
                    </Link>
                  </td>
                  <td>
                    <button className="btn btn-outline-danger shadow-sm">
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}
