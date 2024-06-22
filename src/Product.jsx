import React from "react";
import "./Product.css";

const Product = ({ title, price, features,newFeatures }) => {
  // const list = features.map((item) => {
  //     return <li>{item}</li>
  // });
  let isDiscount = price < 3000;
 
  let styles = {backgroundColor: isDiscount ? "pink" : "red"}



  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <p>Price : {price}</p>
      <p>new : {newFeatures.a}</p>
      {isDiscount && <p>Discount of 5%</p>}
      <p>
        {features.map((item) => (
          <li>{item}</li>
        ))}
      </p>
     
    </div>
  );
};

export default Product;
