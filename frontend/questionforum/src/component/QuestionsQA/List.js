import React from "react";
import QuestionALL from "./QuestionALL";
import { Link } from "react-router-dom";

function List({ redirect }) {
  return (
    <div>
      <div className="mainBody">
        <div className="description">
          <p>{redirect.length} questions</p>
          <div className="additional-button">
            <Link to={"/addQuestion"}>
              <button>Add Question</button>
            </Link>
          </div>
        </div>
        <div className="questions">
          {redirect?.map((_q, index) => (
            <div key={index} className="question-internal">
              <QuestionALL redirectData={_q} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default List;
