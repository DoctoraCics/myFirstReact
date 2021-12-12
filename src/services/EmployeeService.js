import httpCommon from "../commons/http-common";


const getEmployees = () =>{
    return httpCommon.get('/employees')
}

const postEmployee = (data) =>{
    return httpCommon.post('/employees', data)
}

const getEmployee = (employeeId) => {
    return httpCommon.get(`/employees/${employeeId}`)
}

const putEmployee = (data) => {
    return httpCommon.put('/employees', data)
}

const deleteEmployee = (employee_id) => {
    return httpCommon.delete(`/employees/${employee_id}`)
}

export default {getEmployees, postEmployee, getEmployee, putEmployee, deleteEmployee}