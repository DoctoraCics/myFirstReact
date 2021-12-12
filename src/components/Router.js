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
            <Route exact path = "/" element = {<Home/>}/>
            <Route exact path = "/employee" element = {<Employee/>}/>
            { <Route exact path = "/add" element = {<AddEmployee/>}/> }
            <Route exact path = "/employee/edit/:employeeId" element = {<AddEmployee/>}/>
            <Route exact path = "*" element = {<PageNotFound/>}/>
        </Routes>
        </BrowserRouter>
    </div>
    )
}
export default Router