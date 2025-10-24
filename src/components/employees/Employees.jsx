import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employeeService";
import { User } from "../../Users/Users";
import "./Employees.css"

export const EmployeeList = () => {
    
    const [employees, setEmployees] = useState([])
    
    useEffect(()=>{
        getAllEmployees().then((EmployeeArray)=> {
            setEmployees(EmployeeArray)
        })

    }, [])

    return (
        <div className="employees">
            {employees.map((employeeObj) => {
                return<User user={employeeObj} key ={employeeObj.id} />
            }

            )}
        </div>
    )
}