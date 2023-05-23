import React, { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";

function QuizTable({ onShow, onGetQuizNumber }) {
  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    const storedQuizList = JSON.parse(localStorage.getItem("quizList")) || [];
    setQuizList(storedQuizList);
  }, [quizList]);

  const removeQuiz = (i) => {
    const newQuizzes = [...quizList];
    newQuizzes.splice(i, 1);
    setQuizList(newQuizzes);
    localStorage.setItem("quizList", JSON.stringify(newQuizzes));
  };

  return (
    <aside className="col-3">
      <table className="table table-hover">
        <thead className="thead-light">
          <tr>
            <th scope="col">Your Quizzes</th>
          </tr>
        </thead>
        <tbody>
          {quizList.map((quiz, index) => (
            <tr
              key={index}
              onClick={() => {
                onShow();
                onGetQuizNumber(index);
              }}
            >
              <td className="d-flex justify-content-between">
                {quiz.name}
                <DeleteButton index={index} onClick={() => removeQuiz(index)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </aside>
  );
}

export default QuizTable;
