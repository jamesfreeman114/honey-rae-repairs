import { useState, useEffect } from "react";
import { getNonStaffUsers } from "../../services/customerService";
import { User } from "../../Users/Users";
import "./Customers.css"


export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then((customerArray) => {
            setCustomers(customerArray)
        })
    }, [])

    return (
        <div className="customers">
            {customers.map((customerObj) => {
             return < User user={customerObj} key ={customerObj.id}/>
                
            }

            )}
        </div>

    )
}