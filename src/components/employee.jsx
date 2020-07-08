import React, { Component } from 'react';
 
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

            </div>
        );
    }
}
 
export default Employee;