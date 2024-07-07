import { useState } from "react";

const CommentForm = () => {
  const [formData, setFormData] = useState({
    user: "",
    remarks: "",
    rating: 5,
  });

  const handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      user: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <>
      <h1>Comments</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Username : </label>
        <input
          type="text"
          name="user"
          id="user"
          placeholder="enter username"
          value={formData.user}
          onChange={handleInputChange}
        />
        <br /> <br />
        <label htmlFor="remarks">Remarks : </label>
        <textarea
          name="remarks"
          id="remarks"
          value={formData.remarks}
          onChange={handleInputChange}
        ></textarea>{" "}
        <br /> <br />
        <label htmlFor="rating">Rating : </label>
        <input
          type="number"
          name="rating"
          id="rating"
          placeholder="enter rating"
          value={formData.rating}
          min={1}
          max={5}
          onChange={handleInputChange}
        />{" "}
        <br /> <br />
        <button>Submit</button>
      </form>
      <hr />
    </>
  );
};

export default CommentForm;
