import React from "react";
import "./Product.css";
import Price from "../Price";

const Product = ({ title, idx }) => {
  let oldPrices = ["12,789", "11,890", "1,590", "599"];
  let newPrices = ["8,999", "9,199", "800", "289"];
  let description = [
    ["8,000 DPI","5 Programmable buttons"],
    ["Intutive surface","designed by Intel"],
    ["Designed for IPad Pro","wireless"],
    ["Wireless","Intel"],
  ];

  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
};

export default Product;
