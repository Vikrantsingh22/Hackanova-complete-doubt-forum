import axios from "axios";
import React, { useEffect, useState } from "react";
// import Main from "./Main";
import List from "./List";

function Index() {
  const [questions, setQuestion] = useState([]);
  // at beginning it should be empty
  useEffect(() => {
    async function getQuestion() {
      await axios.get("/Question/list").then((res) => {
        setQuestion(res.data.res);
        console.log(res.data.res);
      });
    }
    getQuestion();
  }, []);
  return (
    <div>
      <List redirect={questions} />
      Testing
    </div>
  );
}

export default Index;
