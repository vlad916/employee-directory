import React, { Component } from 'react';
import { getEmployees} from './employeesAPI/API';
 
class Employee extends Component {
    state = { 
        employees: []
     };

    componentDidMount () {
        this.setState ({ employees: getEmployees() });
    };

    render() { 

        return (  
            <div>
                <table className='table'>
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
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Employee;