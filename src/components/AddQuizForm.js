import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import React, { useState, useEffect } from "react";


function AddQuizForm({ onCancel }) {
  const [quizName, setQuizName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [quizList, setQuizList] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const storedQuizList = JSON.parse(localStorage.getItem("quizList")) || [];
    setQuizList(storedQuizList);
  }, []);

  const handleAddQuestion = () => {
    setCounter(counter + 1);
    setQuestions([...questions, {
      id: counter,
      question: ""
    }])
  }

  const handleQuizNameChange = (event) => {
    setQuizName(event.target.value);
  };

  const handleQuestionsChange = (event, id) => {
    const updatedQuestions = questions.map(question => {
      if (question.id === id) {
        return {...question, value: event.target.value}
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const quiz = {
      name: quizName,
      questions: questions,
      display: false
    };

    const updatedQuizList = [...quizList, quiz];
    localStorage.setItem("quizList", JSON.stringify(updatedQuizList));
    setQuizList(updatedQuizList);

    setQuizName("");
    setQuestions([]);
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
        {questions.map(question => (
          <div className='form-group mb-4 mt-4'>
            <label htmlFor="question">Question {question.id}:</label>
            <input
              type="text"
              id="question"
              key={question.id}
              className="form-control"
              value={question.value}
              onChange={event => handleQuestionsChange(event, question.id)}
            />
          </div>
        ))}
        <div className='d-flex justify-content-end'>
          <Button 
            type='button'
            className='mb-4'
            variant='outline-success'
            onClick={handleAddQuestion}
          >
            <Plus /> Insert Question
          </Button>
        </div>
        <div className='d-flex justify-content-between'>
          <Button
            type="submit"
            variant="outline-success"
          >
            Save
          </Button>
          <Button
            variant="outline-danger"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
        
      </form>
    </main>
  );
}

export default AddQuizForm;
