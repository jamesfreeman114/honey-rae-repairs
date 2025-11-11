import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService"
import "./Tickets.css"
import { Ticket } from "./Ticket"
import { FilterBar } from "./FilterBar"


export const TicketList = ({currentUser}) => {

  const [allTickets, setAllTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
  const [showOpenOnly, setShowOpenOnly] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const getAndSetTickets = () => {
    getAllTickets().then((ticketArray) => {
      if (currentUser.isStaff) {
      setAllTickets(ticketArray) 
    } else {
      const customerTickets = ticketArray.filter(ticket => ticket.userId === currentUser.id)
      setAllTickets(customerTickets)
    }

    })

  }


  useEffect(() => {
    getAndSetTickets()
  }, [currentUser])

  useEffect(()=> {
    if (showOpenOnly) {
    const openTickets = allTickets.filter(ticket => 
      ticket.dateCompleted === '' )
      setFilteredTickets(openTickets)
  } else (setFilteredTickets(allTickets))

  }, [showOpenOnly, allTickets])


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
        setShowOpenOnly = {setShowOpenOnly}
        currentUser= {currentUser}
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