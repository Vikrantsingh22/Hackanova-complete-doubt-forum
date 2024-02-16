import React, { useState } from "react";
import axios from "axios";

const AddQuestion = () => {
  const [questionString, setquestionString] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "/Question/add/",
        {
          questionString: questionString,
        },
        config
      );
      console.log(response);
      setquestionString("");
      // Assuming the cookie is returned in the response headers
      // Handle the cookie (e.g., store it in local storage or cookie storage)

      // Handle successful login (e.g., redirect to another page)
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Add Question</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question:</label>
          <input
            type="text"
            value={questionString}
            onChange={(e) => setquestionString(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddQuestion;
