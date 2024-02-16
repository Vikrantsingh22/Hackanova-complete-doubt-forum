import React, { useEffect, useState } from "react";

function NewSpecificAnswerList({ redirectData }) {
  // Changed function name to start with uppercase letter
  const [specificAnswer, setSpecificAnswer] = useState(""); // Fixed typo in state variable name

  useEffect(() => {
    setSpecificAnswer(redirectData);
    console.log(redirectData);
  }, [redirectData]);

  return (
    <div>
      <div className="actualanswer">
        <div>
          <p> Answer:{specificAnswer?.answerString}</p>
          <p>UserName:{specificAnswer?.user_id?.username}</p>
        </div>

        {/* <div>
          <AddAnswer questionId={specificAnswer?.questionId} />
        </div> */}
      </div>
    </div> // Changed div content to indicate component name
  );
}

export default NewSpecificAnswerList; // Changed export name to match component name
