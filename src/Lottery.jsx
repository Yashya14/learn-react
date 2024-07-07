import { useState } from "react";
import { genTicket } from "./helper";
import Ticket from "./Ticket";

const Lottery = ({n = 3,winCondition}) => {
  const [ticket, setTicket] = useState(genTicket(n));
  const isWinning = winCondition(ticket);

  const buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h1>Lottery Game</h1>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 10px",
          borderRadius: "30px",
          textAlign: "center",
          height: "100px",
          width: "28rem",
          display:"flex",
          justifyContent: "center",
          alignItems:"center",
          fontSize:"3rem",
          
        }}
      >
      
        <Ticket ticket={ticket}/>

      </div>
      <button
        onClick={buyTicket}
        style={{
          margin: "10px",
          border: "none",
          backgroundColor: "green",
          color: "white",
          padding: "10px 10px",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        Buy New Ticket
      </button>
      <h3>{isWinning && "Congratulations, You Won!"}</h3>
      <br />
      <hr />
    </div>
  );
};

export default Lottery;
