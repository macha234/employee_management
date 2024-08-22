import Form from "../componnts/Form";
import { useState } from "react";
import { Link } from "react-router-dom";

function ListEmployees() {
    const [employees, setEmployees] = useState(
        Array.isArray(JSON.parse(localStorage.getItem("employees")))
        ? JSON.parse(localStorage.getItem("employees"))
        : []
    )

function removeEmployee(id){
    const newEmployees = employees.filter(employee => employee.id !== id)
    setEmployees(newEmployees)
}

    return(
        <>
        <h1 className="manage__large">Manage Employees</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date of birth</th>
                    <th>Gender</th>
                    <th>Residence</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.dateOfBirth}</td>
                        <td>{employee.gender}</td>
                        <td>{employee.residence}</td>
                        <td>{employee.department}</td>
                        <td>{employee.salary}</td>
                        <td className="actions">
                            
                            <Link to={`/edit/${employee.id}`}>
                            <button className="edit__btn">Edit</button>
                            </Link>
                            
                            <button onClick={()=>removeEmployee(employee.id)} className="remove__btn">Remove</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        <Form employees={employees} setEmployees={setEmployees}/>
        </>

    )
}

export default ListEmployees