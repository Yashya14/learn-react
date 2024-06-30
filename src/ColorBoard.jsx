import { useState } from "react";

const ColorBoard = () => {
    const [moves,setMoves] = useState({red : 0, blue : 0});

    const handleRed = () => {
        setMoves((currMoves) => {
           return {...currMoves, red : currMoves.red + 1}
        });
    }
    const handleBlue = () => {
        setMoves((currMoves) => {
           return {...currMoves, blue : currMoves.blue + 1}
        });
    }

  return (
    <>
      <h1>Red : {moves.red}</h1>
      <button
        style={{ backgroundColor: "red", fontSize: "30px", color: "#fff",borderRadius: "15px",padding : "2px 20px" }}
        onClick={handleRed}
      >
        +1
      </button>
      <h1>Blue : {moves.blue}</h1>
      <button
        style={{ backgroundColor: "blue", fontSize: "30px", color: "#fff",borderRadius: "15px" ,padding : "2px 20px"}}
        onClick={handleBlue}
      >
        +1
      </button>
    </>
  );
};

export default ColorBoard;
