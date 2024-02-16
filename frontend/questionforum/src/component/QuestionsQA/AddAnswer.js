import axios from "axios";
import React, { useState } from "react";

function AddAnswer({ questionId }) {
  const [answerString, setanswerString] = useState("");
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
        "/Answer/add/",
        {
          answerString: answerString,
          questionId: questionId,
        },
        config
      );
      setanswerString("");
      console.log(response);

      // Assuming the cookie is returned in the response headers
      // Handle the cookie (e.g., store it in local storage or cookie storage)

      // Handle successful login (e.g., redirect to another page)
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h2>Add Answer</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Answer:</label>
          <input
            type="text"
            value={answerString}
            onChange={(e) => setanswerString(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddAnswer;
