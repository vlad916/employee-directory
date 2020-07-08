import React, { Component } from 'react';

class EmployeesTable extends Component {

raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if ( sortColumn.path === path )
    sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
    else {
        sortColumn.path = path; 
        sortColumn.order = 'asc';
    }
    this.props.onSort (sortColumn);
};

    render() { 
        const { employees } = this.props;
        return ( 
            <table className="table">
            <thead>
              <tr>
                <th onClick={ () => this.raiseSort ('image')}>Image</th>
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