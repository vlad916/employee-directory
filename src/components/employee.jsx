import React, { Component } from "react";
import EmployeesTable from "./employeesTable";
import SearchEmployees from "./search";
import { getEmployees } from "./employeesAPI/API";
import _ from "lodash";

class Employee extends Component {
  state = {
    employees: [],
    search: "",
    sortColumn: { path: "name", order: "asc" },
  };

  componentDidMount() {
    this.setState({ employees: getEmployees() });
  }

  handleUpdateSearch = (event) => {
    this.setState({ search: event.target.value.substr(0, 20) });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
   
    const { search, sortColumn, employees: allEmployees } = this.state;

    let filteredEmployees = allEmployees.filter((employee) => {
      return (
        employee.name.first
          .toLowerCase()
          .indexOf(search.toLowerCase()) !== -1
      );
    });

    const sorted = _.orderBy(
      filteredEmployees,
      [sortColumn.path],
      [sortColumn.order]
    );

    return (
      <div>
        <div>
          <SearchEmployees
            value={search}
            onChange={this.handleUpdateSearch.bind(this)}
          />
        </div>
        <br />
        <p>Showing {filteredEmployees.length} employees in the directory...</p>
        <EmployeesTable
          employees={(filteredEmployees, sorted)}
          onSort={this.handleSort}
          sortColumn={sortColumn}
        />
      </div>
    );
  }
}

export default Employee;
