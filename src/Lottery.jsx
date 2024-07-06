import { useState } from "react";
import { genTicket, sum } from "./helper";

const Lottery = () => {
  const [ticket, setTicket] = useState(genTicket(3));
  const isWinning = sum(ticket) === 15;
  const buyTicket = () => {
    setTicket(genTicket(3));
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
          fontSize: "30px",
        }}
      >
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
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
