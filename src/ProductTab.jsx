import React from "react";
import Product from "./Product";

const ProductTab = () => {
  let styles = {
    display: "flex",
  };

  let options2 = ["hi-tech", "durable", "fast"];
// let options2 = [<li>hi-tech</li>,<li>durable</li>]
  let options = { a: "smart", b: "high ink" };

  return (
    <div style={styles}>
      <Product title="Watch" price={4500} features={options2} newFeatures={options}/>
      <Product title="Pen" price={2300} features={options2} newFeatures={options}/>
      <Product title="Pencil" price={4000} features={options2} newFeatures={options}/>
    </div>
  );
};

export default ProductTab;
