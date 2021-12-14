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
            <Route exact path = "/myFirstReact/employee" element = {<Employee/>}/>
            {<Route exact path = "/myFirstReact/add" element = {<AddEmployee/>}/> }
            <Route exact path = "/myFirstReact/employee/edit/:employeeId" element = {<AddEmployee/>}/>
            <Route exact path = "*" element = {<PageNotFound/>}/>
        </Routes>
        </BrowserRouter>
    </div>
    )
}
export default Router