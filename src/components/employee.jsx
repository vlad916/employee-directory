import React, { Component } from "react";
import EmployeesTable from './employeesTable';
import { getEmployees } from "./employeesAPI/API";
import _ from 'lodash';

class Employee extends Component {
  state = {
    employees: [],
    sortColumn: { path: 'image', order: 'asc' }
  };

  componentDidMount() {
    this.setState({ employees: getEmployees() });
  };

  handleSort = (sortColumn) => {
    this.setState ({ sortColumn });
  };

  render() {

    const { length: count } = this.state.employees;  
    
    // if ( count === 0 ) return <p>There are no Employees in the directory</p>
    const { employees, sortColumn } = this.state;

    _.orderBy (
        [sortColumn.path],
        [sortColumn.order]
    );

    return (
      <div>
          <p>Showing { count } employees in the directory...</p>
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
