import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import EmployeeService from "../services/EmployeeService"

const AddEmployee = () => {

    const [name,setName] = useState("")
    const [location,setLocation] = useState("")
    const [department,setDepartment] = useState("")
    const navigate =useNavigate()
    const {employeeId} = useParams()

    const saveEmployee = (e) => {
        e.preventDefault()

        const employee = {name, location, department, employeeId}

        if (employeeId) {

            //Update the employee
            EmployeeService.putEmployee(employee)
            .then(response => {
                console.log("Employee updated!", response.data)
                navigate("/employee")
            })
            .catch(error => {
                console.log("Error putting Employee!")
            })

        }
        else {
            EmployeeService.postEmployee(employee)
            .then(response => {
                    console.log("Employee Added!", response.data)
                    navigate("/employee")
                })
                .catch(error => {
                    console.log("Error posting Employee")
            })
        }
    }

        //Hooks
        useEffect(() => {
            if(employeeId){
                EmployeeService.getEmployee(employeeId)
                .then(response => {
                    setName (response.data, location)
                    setLocation(response.data.location)
                    setDepartment(response.data.department)
                })
                .catch(error => {
                    console.log("Error getting Employees")
                })
            }
        },[])

        useEffect(() => {
            if(employeeId){
                EmployeeService.getEmployee(employeeId)
                .then(
                    employee =>{
                        setName(employee.data.name);
                        setLocation(employee.data.location);
                        setDepartment(employee.data.department);
                    }
                )
                .catch(error => {
                    console.log("Error on Employee Id")
                })
            }
        })
    
        return (
            <div>
                <h3>Add Employee</h3>
                <form>
                        <div className="container">
                            <label for="nameField" className="form-label">Name</label>
                                <input 
                                   type="text" 
                                   className="form-control" 
                                   id="name" 
                                   placeholder = "Input Employee Name" 
                                   value = {name}
                                   onChange ={
                                       (e) => setName(e.target.value)
                                   }/>
                        </div>
                        <div className="mb-3">
                            <label for="locationField" className="form-label">Location</label>
                            <input 
                                type="locationField" 
                                className="form-control" 
                                id="location" 
                                placeholder = "Input Employee Location" 
                                value = {location}
                                onChange ={
                                    (e) => setLocation(e.target.value)
                                }/>
                        </div>
                        <div className="mb-3">
                            <label for="departmentField" className="form-label">Department</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="department" 
                                placeholder = "Input Employee Department" 
                                value = {department}
                                onChange ={
                                (e) => setDepartment(e.target.value)
                            }/>
                        </div>
                    <button type="submit" className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save</button>
                </form>
        </div>
        ) 
}
export default AddEmployee 
