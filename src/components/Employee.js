import {useEffect, useState} from "react";
import EmployeeService from "../services/EmployeeService"
import { Link } from "react-router-dom";

const Employee = () => {

    const [employees, setEmployees] = useState([]) //need to be [] because of array

    //hooks
    useEffect(() => {
        EmployeeService.getEmployees()
        .then(
            response => {
                setEmployees(response.data)
            }
        )
        .catch(
            err => {console.log("something went wrong")}
        )
    })

    const refreshEmployeeTable = () => {
        EmployeeService.getEmployees()
        .then(
            response => {
                setEmployees(response.data)
            }
        )
        .catch(
            err => {
                console.log("Error Refreshing Employee Table")
            }
        )
    }

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId)
        .then(
            response => {
                console.log(`Deletion of successful`)
                refreshEmployeeTable()
            }
        )
        .catch(
            err => {
                console.log("Deletion unsuccessful")
            }
        )
    }

    return (
<div>
    <h3>List of Employees</h3>
    <div>
        <table className = "table table-light table-bordered table-hover table-stripped" >
        <thead>
            <tr className = "table-light">
                <td>ID</td>
                <td>Name</td>
                <td>Department</td>
                <td>Actions</td>
            </tr>
        </thead>
        <tbody>
            {
            employees.map(
                employee => (
                    <tr key={employee.employeeId}>
                        <td>{employee.name}</td>
                        <td>{employee.department}</td>
                        <td>{employee.location}</td>
                        <td>
                            <div>
                                <Link className = "btn btn-primary" to={`/employee/edit/${employee.employeeId}`}>Update</Link>
                                <button className = "btn btn-danger" onClick={() =>deleteEmployee(employee.employeeId)}>Delete</button>

                            </div>
                        </td>
                    </tr>
                )
            )
            }
            </tbody>
        </table>
    </div>
           
</div>
    )
}
export default Employee