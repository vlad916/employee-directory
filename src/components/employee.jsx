import React, { Component } from "react";
import EmployeesTable from './employeesTable';
import { getEmployees } from "./employeesAPI/API";

class Employee extends Component {
  state = {
    employees: [],
    sortColumn: { path: 'Name', order: 'asc' }
  };

  componentDidMount() {
    this.setState({ employees: getEmployees() });
  };

  handleSort = (sortColumn) => {
    this.setState ({ sortColumn });
  };

  render() {
    const { employees } = this.state;
    return (
      <div>
       <EmployeesTable 
       employees={employees}
       onSort={this.handleSort}
       sortColumn={sortColumn}
       />
      </div>
    );
  }
}

export default Employee;
