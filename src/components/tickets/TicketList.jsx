import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService"
import "./Tickets.css"
import { Ticket } from "./Ticket"
import { FilterBar } from "./FilterBar"


export const TicketList = ({currentUser}) => {

  const [allTickets, setAllTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const getAndSetTickets = () => {
    getAllTickets().then((ticketArray) => {
      setAllTickets(ticketArray)

    })

  }


  useEffect(() => {
    getAndSetTickets()
  }, [])


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





  return (
    <div className="allTickets">
      <h2>Tickets</h2>
      <FilterBar 
        setShowEmergencyOnly = {setShowEmergencyOnly}
        setSearchTerm = {setSearchTerm}
      />
     
      <article className="tickets">
        {filteredTickets.map((ticket) => {
          return <Ticket 
            ticket={ticket}
            currentUser = {currentUser}
            getAndSetTickets = {getAndSetTickets} 
            key={ticket.id} />
        }

        )}
      </article>

    </div>
  )

}