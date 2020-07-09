import React, { Component } from "react";
import TableHeader from "./tableHeader";

class EmployeesTable extends Component {
  render() {
    const { employees, onSort, sortColumn } = this.props;
    return (
      <table className="table">
        <TableHeader onSort={onSort} sortColumn={sortColumn} />
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>
                <img src={employee.image} />
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
    );
  }
}

export default EmployeesTable;
