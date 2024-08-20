import React, { Component } from 'react';

class StudentList extends Component {
    render() {

        const students = [
            { id: 1, name: 'Nguyễn Văn A', age: 30, address: 'Hà Nội' },
            { id: 2, name: 'Nguyễn Văn B', age: 31, address: 'HCM' }
        ];

        return (
            <table border="1">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {students.map(student => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default StudentList;
