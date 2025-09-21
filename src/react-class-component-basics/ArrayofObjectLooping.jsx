import { Component,Fragment } from "react";

export class ArrayOfObjectLooping extends Component {
  constructor() {
    super();
    this.state = {
      employees: [
        {
          empid: 4211,
          empName: "Saravanan",
          desigination: "Software Developer",
          location: "Chennai",
        },
        {
          empid: 4212,
          empName: "Rajeshwaran",
          desigination: "Mobile App Developer",
          location: "Banglore",
        },
        {
          empid: 4213,
          empName: "Vimal",
          desigination: "Mobile App Tester",
          location: "Mysore",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1> TCS Employee list </h1>
        <div className="employee-list">
          <table border = {2}>
            <thead>
              <tr>
                <th>Emp ID</th>
                <th>Emp name</th>
                <th>Emp Desigination</th>
                <th>Emp location</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.length != 0 ? (
                this.state.employees.map((value, index) => {
                  const { empid, empName, desigination, location } = value;
                  return (
                    <Fragment key={index}>
                      <tr>
                        <td>{empid}</td>
                        <td>{empName}</td>
                        <td>{desigination}</td>
                        <td>{location}</td>
                      </tr>
                    </Fragment>
                  );
                })
              ) : (
                <tr>
                  <td>No records Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
