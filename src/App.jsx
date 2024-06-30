import React from "react";
import Button from "./Button";
import ColorBoard from "./ColorBoard";
import ProductTab from "./ProductTab";
import Todos from "./Todos";

function App() {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Blockbuster Deals | shop now</h2>
      <ProductTab />
      <Button />
      <ColorBoard />
      <Todos />
    </>
  );
}

export default App;
