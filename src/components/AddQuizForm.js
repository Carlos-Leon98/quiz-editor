import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import React, { useState, useEffect } from "react";


function AddQuizForm() {
  const [quizName, setQuizName] = useState("");
  const [question, setQuestion] = useState("");
  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    const storedQuizList = JSON.parse(localStorage.getItem("quizList")) || [];
    setQuizList(storedQuizList);
  }, []);

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
      questions: question,
      display: false
    };

    const updatedQuizList = [...quizList, quiz];
    localStorage.setItem("quizList", JSON.stringify(updatedQuizList));
    setQuizList(updatedQuizList);

    setQuizName("");
    setQuestion("");
  };

  const handleInsertQuestion = () => {
    const updatedQuizList = [...quizList];
    updatedQuizList.push({
      name: quizName,
      questions: question,
      display: false
    });
    setQuizList(updatedQuizList);

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
        <div className='d-flex justify-content-end'>
          <Button 
            type='button'
            className='mb-4'
            variant='outline-success'
            onClick={handleInsertQuestion}
          >
            <Plus /> Insert Another Question
          </Button>
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
