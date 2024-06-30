function handleSendMsg() {
  console.log("hello world");
}
function handleHover() {
  console.log("mouse over");
}

const Button = () => {
  return (
    <div>
      <button onClick={handleSendMsg}>submit</button>
      <p onMouseOver={handleHover}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci unde
        eaque, nam eius eos vel, rem tenetur omnis commodi totam debitis sed
        distinctio nihil nulla dicta repudiandae architecto odit libero?
      </p>
    </div>  
  );
};

export default Button;
