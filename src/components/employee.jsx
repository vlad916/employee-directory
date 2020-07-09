import React, { Component } from "react";
import EmployeesTable from './employeesTable';
import SearchEmployees from './search';
import { getEmployees } from "./employeesAPI/API";
import _ from 'lodash';

class Employee extends Component {
  state = {
    employees: [],
    // sortColumn: { path: 'image', order: 'asc' }
  };

  componentDidMount() {
    this.setState({ employees: getEmployees() });
  };

  handleUpdateSearch = (event) => {
    

  };

  // handleSort = (sortColumn) => {
  //   this.setState ({ sortColumn });
  // };

  render() {

    const { length: count } = this.state.employees;  
    
    // if ( count === 0 ) return <p>There are no Employees in the directory</p>
    const { employees, search } = this.state;

    // _.orderBy (
    //     [sortColumn.path],
    //     [sortColumn.order]
    // );

    return (
      <div>
        <div>
          <SearchEmployees 
          value={search}
          onChange={this.handleUpdateSearch.bind(this)}
          />
        </div>
        <br />
          <p>Showing { count } employees in the directory...</p>
       <EmployeesTable 
       employees={employees}
      //  onSort={this.handleSort}
      //  sortColumn={sortColumn}
       />
      </div>
    );
  }
}

export default Employee;
