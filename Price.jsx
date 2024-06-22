const Price = ({ oldPrice, newPrice }) => {
  let styles = { backgroundColor: "red",borderBottomLeftRadius: "10px",borderBottomRightRadius: "10px"};

  return (
    <div style={styles}>
      &#8377;
      <span style={{ stextDecorationLine: "line-through" }}>{oldPrice}</span>{" "}
      &nbsp;&nbsp;&nbsp; &#8377;
      <span style={{fontWeight:"bold"}}>{newPrice}</span>
    </div>
  );
};

export default Price;
