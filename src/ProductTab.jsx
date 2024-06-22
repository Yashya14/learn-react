import React from "react";
import Product from "./Product";

const ProductTab = () => {
    let styles = {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    };

  return (
    <div style={styles}>
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple Pencil (2nd Gen)" idx={1} />
      <Product title="Zebronics Zeb-transformer" idx={2} />
      <Product title="Petronics Toad 23" idx={3} />
    </div>
  );
};

export default ProductTab;
