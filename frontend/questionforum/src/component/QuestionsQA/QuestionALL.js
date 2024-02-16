import axios from "axios";
import React, { useEffect, useState } from "react";
import Answer from "./Answer";
import { Link } from "react-router-dom";

function QuestionALL({ redirectData }) {
  const [specificQuestion, setSpecificQuestion] = useState(null); // Change to null
  const [click, setClick] = useState(false);
  useEffect(() => {
    async function getSpecificQuestion() {
      try {
        const response = await axios.get(
          `/Question/listSpecific/${redirectData?._id}`
        );
        setSpecificQuestion(response.data.res);
        console.log(response.data.res);
      } catch (error) {
        console.error("Error fetching specific question:", error);
      }
    }
    getSpecificQuestion();
  }, [redirectData]);

  // Render null if specificQuestion is null or undefined
  if (!specificQuestion) {
    return null;
  }

  const onClickbutton = (id) => {
    window.location.replace(`/specificQuestion?id=${id}`);
    setClick(!click);
  };
  return (
    <div className="big-container">
      <div className="question-title">
        <p>id={specificQuestion._id}</p>
        <br></br>
        {/* {click ? (
          <div className="answer-container">
            <p>
              answer=
              {specificQuestion.answer_id?.map((_q, index) => (
                <div key={index} className="question-internal">
                  <Answer redirectData={_q} />
                </div>
              ))}
            </p>
          </div>
        ) : (
          ""
        )} */}
        <button
          onClick={() => {
            onClickbutton(specificQuestion._id);
          }}
        >
          <p>title={specificQuestion.questionString}</p>
        </button>
      </div>
    </div>
  );
}

export default QuestionALL;
