import TicketNum from "./TicektNum";

const Ticket = ({ ticket }) => {
  return (
    <div>
      {ticket.map((num,idx) => (
        <TicketNum num={num} key={idx}/>
      ))}
    </div>
  );
};

export default Ticket;
