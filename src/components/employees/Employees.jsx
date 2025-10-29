import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employeeService";
import { User } from "../Users/Users";
import "./Employees.css"
import { Link } from "react-router-dom";

export const EmployeeList = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllEmployees().then((EmployeeArray) => {
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