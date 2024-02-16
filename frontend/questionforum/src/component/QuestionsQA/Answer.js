import axios from "axios";
import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import NewSpecificAnswerList from "./NewSpecificAnswerlist";
import AddAnswer from "./AddAnswer";

function Answer({ redirectData }) {
  //   const [specficQuestionAnswers, setSpecificQuestionAnswers] = useState(null);
  const [specificQuestion, setSpecificQuestion] = useState(null);
  const [questionObjectID, setquestionObjectID] = useState(null);

  useEffect(() => {
    let search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("id");
    setquestionObjectID(id);
  }, []); // Empty dependency array ensures this effect runs only once after mounting

  useEffect(() => {
    async function getSpecificQuestion() {
      try {
        const response = await axios.get(
          `/Question/listSpecific/${questionObjectID}`
        );
        setSpecificQuestion(response.data.res);
        console.log(response.data.res);
      } catch (error) {
        console.error("Error fetching specific question:", error);
      }
    }
    if (questionObjectID !== null) {
      getSpecificQuestion();
    }
  }, [questionObjectID]); // Run this effect whenever questionObjectID changes

  return (
    <div>
      {/* {/* <div className="answersList">
        answer_id={specificQuestion.questionString}
      </div> */}
      {/* hello */}
      <div className="Question-title">
        {specificQuestion?.questionString}
        <div>created by={specificQuestion?.user_id?.username}</div>
        <div>At={specificQuestion?.createdAt}</div>
      </div>
      <div className="Answer-Block">
        <div className="answer">
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
          <div>
            <p>
              answer=
              {specificQuestion?.answer_id?.map((_q, index) => (
                <div key={index} className="answer-internal">
                  <NewSpecificAnswerList redirectData={_q} />
                </div>
              ))}
            </p>
          </div>
          <div>
            <AddAnswer questionId={questionObjectID} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answer;
