import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService"
import "./Tickets.css"
import { Ticket } from "./Ticket"
import { FilterBar } from "./FilterBar"


export const TicketList = () => {

  const [allTickets, setAllTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])
  const [searchTerm, setSearchTerm] = useState('')



  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(ticket =>
        ticket.emergency === true)
      setFilteredTickets(emergencyTickets)
    }
    else (setFilteredTickets(allTickets))
  }, [showEmergencyOnly, allTickets])

  useEffect(() => {
    const foundTicket = allTickets.filter((ticket) => {
      return ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setFilteredTickets(foundTicket)
  }, [searchTerm, allTickets])

  useEffect(() => {
    getAllTickets().then((ticketArray) => {
      setAllTickets(ticketArray)
      console.log("tickets set!")
    })
  }, [])



  return (
    <div className="allTickets">
      <h2>Tickets</h2>
      <FilterBar 
        setShowEmergencyOnly = {setShowEmergencyOnly}
        setSearchTerm = {setSearchTerm}
      />
     
      <article className="tickets">
        {filteredTickets.map((ticketObj) => {
          return <Ticket ticket={ticketObj} name={"Joe"} key={ticketObj.id} />
        }

        )}
      </article>

    </div>
  )

}