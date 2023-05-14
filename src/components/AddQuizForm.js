import React, { useState } from "react";

function AddQuizForm() {
  const [quizName, setQuizName] = useState("");
  const [question, setQuestion] = useState("");

  const handleQuizNameChange = (event) => {
    setQuizName(event.target.value);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const quiz = {
      name: quizName,
      question: question,
      display: false
    };

    const quizList = JSON.parse(localStorage.getItem("quizList")) || [];
    quizList.push(quiz);

    localStorage.setItem("quizList", JSON.stringify(quizList));

    setQuizName("");
    setQuestion("");
  };

  return (
    <main className="col-9">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4 mt-4">
          <label htmlFor="quizName">Name of the Quiz:</label>
          <input
            type="text"
            id="quizName"
            className="form-control"
            value={quizName}
            onChange={handleQuizNameChange}
          />
        </div>
        <div className="form-group mb-4 mt-4">
          <label htmlFor="question">Question:</label>
          <input
            type="text"
            id="question"
            className="form-control"
            value={question}
            onChange={handleQuestionChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-success"
        >
          Save
        </button>
      </form>
    </main>
  );
}

export default AddQuizForm;
