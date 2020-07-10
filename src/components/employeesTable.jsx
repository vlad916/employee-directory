import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class EmployeesTable extends Component {

  columns = [
    { path: 'image', label: 'Image'},
    { path: 'name', label: 'Name' },
    { path: 'phone', label: 'Phone' },
    { path: 'email', label: 'Email' },
    { path: 'dob', label: 'DOB' }
  ]
  render() {
    
    const { employees, onSort, sortColumn } = this.props;
    
    return (
      <table className="table">
        <TableHeader 
        onSort={onSort} 
        sortColumn={sortColumn} 
        columns={this.columns}
        />
        <TableBody 
        employees={employees} 
        />
      </table>
    );
  }
}

export default EmployeesTable;
