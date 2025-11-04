import { useEffect, useState } from "react";
import { User } from "../Users/Users";
import "./Employees.css"
import { Link } from "react-router-dom";
import { getStaffUsers } from "../../services/userService";

export const EmployeeList = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then((EmployeeArray) => {
            setEmployees(EmployeeArray)
        })

    }, [])

    return (
        <div className="employees">
            {employees.map((employeeObj) => {
                return <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id} >
                <User user={employeeObj}  />
                </Link>
            }

            )}
        </div>
    )
}