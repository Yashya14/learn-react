import { useState } from "react";
import "./BackgroundChanger.css"

const BackgroundChanger = () => {
    const [bgColor,setBgColor] = useState("red");



  return (
    <div className="bgColor" style={{backgroundColor:bgColor}}>
      <div
        style={{
          backgroundColor: "gray",
          padding: "10px 10px",
          borderRadius: "30px",
          display: "flex",
          alignItems:"center",
          justifyContent :"center",
          flexWrap:"wrap"
        }}
        
      >
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px 10px",
            borderRadius: "20px",
            marginRight: "10px",
            border: "none",
            cursor:"pointer"
          }}
          onClick={() => setBgColor("red")}
        >
          Red
        </button>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px 10px",
            borderRadius: "20px",
            marginRight: "10px",
            border: "none",
            cursor:"pointer"
          }}
          onClick={() => setBgColor("green")}
        >
          Green
        </button>
        <button
          style={{
            backgroundColor: "orange",
            color: "white",
            padding: "10px 10px",
            borderRadius: "20px",
            marginRight: "10px",
            border: "none",
            cursor:"pointer"
          }}
          onClick={() => setBgColor("orange")}
        >
          Orange
        </button>
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 10px",
            borderRadius: "20px",
            marginRight: "10px",
            border: "none",
            cursor:"pointer"
          }}
          onClick={() => setBgColor("blue")}
        >
          Blue
        </button>
        <button
          style={{
            backgroundColor: "purple",
            color: "white",
            padding: "10px 10px",
            borderRadius: "20px",
            marginRight: "10px",
            border: "none",
            cursor:"pointer"
          }}
          onClick={() => setBgColor("purple")}
        >
          Purple
        </button>
        <button
          style={{
            backgroundColor: "magenta",
            color: "white",
            padding: "10px 10px",
            borderRadius: "20px",
            marginRight: "10px",
            border: "none",
            cursor:"pointer"
          }}
          onClick={() => setBgColor("magenta")}
        >
          Magenta
        </button>
        <button
          style={{
            backgroundColor: "skyblue",
            color: "white",
            padding: "10px 10px",
            borderRadius: "20px",
            marginRight: "10px",
            border: "none",
            cursor:"pointer"
          }}
          onClick={() => setBgColor("skyblue")}
        >
          Skyblue
        </button>
      </div>
    </div>
  );
};

export default BackgroundChanger;
