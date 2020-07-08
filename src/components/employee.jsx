import React, { Component } from "react";
import { getEmployees } from "./employeesAPI/API";

class Employee extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.setState({ employees: getEmployees() });
  }

  render() {
    const { employees } = this.state;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr>
                <td>
                  <img src={employee.image}></img>
                </td>
                <td>
                  {employee.name.first} {employee.name.last}
                </td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.dob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Employee;
