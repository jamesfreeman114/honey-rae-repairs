
export const FilterBar = ({
    setSearchTerm,
    setShowEmergencyOnly,
    currentUser,
    setShowOpenOnly}) => {

    return (

        <div className="filter-bar">
            {currentUser.isStaff ?
                <>
                    <button className="filter-btn btn-primary" onClick={() => { setShowEmergencyOnly(true) }}>Emergency

                    </button>
                    <button className="filter-btn btn-info" onClick={() => { setShowEmergencyOnly(false) }}>Show All

                    </button>
                    <input
                        onChange={(event) => {
                            setSearchTerm(event.target.value)

                        }}
                        type="text"
                        placeholder="Search Tickets"
                        className="ticket-search"
                    >

                    </input> </> : 
                    <>
                    <button className="filter-btn btn-primary">
                    Create Ticket
                    </button>
                    <button className="filter-btn btn-info"
                        onClick={()=>{
                            setShowOpenOnly(true)
                            console.log("only show the Open Tickets")
                        }}
                    >
                    Open Tickets       
                    </button>
                    <button className="filter-btn btn-secondary"
                        onClick={()=>{
                            setShowOpenOnly(false)
                            console.log("Show All My Tickets")
                        }}
                    >
                        All My Tickets
                    </button>
                    </>}

        </div>
    )
}