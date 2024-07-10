import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const fieldname = event.target.name;
    const newValue = event.target.value;

    setFormData((currData) => {
      return { ...currData, [fieldname]: newValue };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    alert(`Your Fullname is ${formData.fullname} and username is ${formData.username}`);
    setFormData({
      fullname: "",
      username: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Fullname : </label>
        <input
          type="text"
          placeholder="enter fullname"
          id="fullname"
          onChange={handleInputChange}
          name="fullname"
          value={formData.fullname}
        />
        &nbsp;&nbsp;
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          placeholder="enter username"
          id="username"
          onChange={handleInputChange}
          name="username"
          value={formData.username}
        />
        &nbsp;&nbsp;
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          placeholder="enter password"
          id="password"
          onChange={handleInputChange}
          name="password"
          value={formData.password}
          autoComplete="password"
        />
        &nbsp;&nbsp;
        <button>Submit</button>
      </form>
      <hr />
    </>
  );
};

export default Form;
