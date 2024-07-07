import { useEffect, useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  const [liked,setLiked] = useState(false);

  useEffect(() => {
    console.log("useEffect() called");
  },[count])

  const handleClick =() => {
    setCount(count+1);
  }

  const handleLiked = () => {
    let newValue = !liked;
    setLiked(newValue);
  }

  let styles = {
    color : "red",
    textAlign : "center",
    fontSize : "3rem",
  }

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={handleClick}>Click</button>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci unde
        eaque, nam eius eos vel, rem tenetur omnis commodi totam debitis sed
        distinctio nihil nulla dicta repudiandae architecto odit libero?
      </p>

     <h1 onClick={handleLiked} style={styles}>
        {liked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
     </h1>

    </div>
  );
};

export default Button;
