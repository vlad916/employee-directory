import React, { Component } from 'react';

class EmployeesTable extends Component {


    render() { 
        const { employees, onSort, sortColumn } = this.props;
        return ( 
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
                    <img src={employee.image}/>
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