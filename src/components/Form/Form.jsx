import { useState } from "react";
const Form = ({ action }) => {
  const [myInput, setMyInput] = useState("");
  const handleChange = (e) => {
    setMyInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    action(myInput);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Search
          <input
            type="text"
            name="myInput"
            value={myInput}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </>
  );
};
export default Form;
