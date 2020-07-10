import React from 'react';
const TableBody = (props) => {
  
  const { employees } = props;

  return (
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
  );
};

export default TableBody;
