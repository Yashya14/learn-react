import React from "react";
import Button from "./Button";
import ColorBoard from "./ColorBoard";
import ProductTab from "./ProductTab";
import Todos from "./Todos";
import BackgroundChanger from "./BackgroundChanger";
import Lottery from "./Lottery";
import { sum } from "./helper";
import Form from "./Form";
import CommentForm from "./CommentForm";
import Jokes from "./Jokes";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
    // sum(ticket) == 15
  };
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Blockbuster Deals | shop now</h2>
      <ProductTab />
      <Button />
      <ColorBoard />
      <Todos />
      <BackgroundChanger />
      <Lottery n={3} winCondition={winCondition} />
      <Form />
      <CommentForm />
      <Jokes />
      <PasswordGenerator />
    </>
  );
}

export default App;
