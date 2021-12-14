import Home from "./Home"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import PageNotFound from "./PageNotFound"
import Employee from "./Employee"
import AddEmployee from './AddEmployee';

const Router = () => {
    return(
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path = "/myFirstReact" element = {<Home/>}/>
            <Route exact path = "/myfirstreact/employee" element = {<Employee/>}/>
            {<Route exact path = "/myfirstreact/add" element = {<AddEmployee/>}/> }
            <Route exact path = "/myfirstreact/employee/edit/:employeeId" element = {<AddEmployee/>}/>
            <Route exact path = "*" element = {<PageNotFound/>}/>
        </Routes>
        </BrowserRouter>
    </div>
    )
}
export default Router