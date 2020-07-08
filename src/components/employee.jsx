import React, { Component } from "react";
import EmployeesTable from './employeesTable';
import { getEmployees } from "./employeesAPI/API";

class Employee extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.setState({ employees: getEmployees() });
  };

  render() {
    const { employees } = this.state;
    return (
      <div>
       <EmployeesTable 
       employees={employees}
       />
      </div>
    );
  }
}

export default Employee;
