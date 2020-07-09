import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class EmployeesTable extends Component {
  render() {
    
    const { employees, onSort, sortColumn } = this.props;
    
    return (
      <table className="table">
        <TableHeader 
        onSort={onSort} 
        sortColumn={sortColumn} 
        />
        <TableBody 
        employees={employees} 
        />
      </table>
    );
  }
}

export default EmployeesTable;
