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

const deleteEmployee = (employeeId) => {
    return httpCommon.delete(`/employees/${employeeId}`)
}

export default {getEmployees, postEmployee, getEmployee, putEmployee, deleteEmployee}