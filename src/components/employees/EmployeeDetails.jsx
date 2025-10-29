import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmployeeByUserId } from "../../services/employeeService";
import "./Employees.css"

export const EmployeeDetails = () => {

    const [employee, setEmployee] = useState({})
    const {employeeId} = useParams()

    useEffect(()=>{
        getEmployeeByUserId(employeeId).then((data) => 
        {const employeeObj = data[0]
        setEmployee(employeeObj)})
    }, [employeeId])

    return (
        <section className="employee">
            <header className="employee-header">{employee.user?.fullName}</header>
            <div>
                <span className="employee-details">Email: </span>
                {employee.user?.email}
            </div>
            <div>
                <span className="employee-details">Specialty: </span>
                {employee.specialty}
            </div>
            <div>
                <span className="employee-details">Rate: </span>
                {employee.rate}
            </div>
            <div>
                <span className="employee-details">Currently working on {employee.employeeTickets?.length} tickets</span>
                
            </div>
           
        </section>
    )
}