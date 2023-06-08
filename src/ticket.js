function loadTicket() {
    const ticketContent = document.createElement("div"); 
    ticketContent.innerHTML = `<h2>Ticket Page</h2>`; 
    console.log(ticketContent); 
    return ticketContent; 
}

export default loadTicket; 