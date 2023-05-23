import { useState } from "react";
import AddQuizForm from "./AddQuizForm";
import QuizTable from "./QuizTable";
import Welcome from "./Welcome";
import Quiz from "./Quiz";

function Main({ isButtonClicked, onButtonClickCancel }) {
    const [displayQuiz, setDisplayQuiz] = useState(false);
    const [quizNumber, setQuizNumber] = useState();

    const showQuiz = () => {
        setDisplayQuiz(true);
    }

    const closeQuiz = () => {
        setDisplayQuiz(false);
        onButtonClickCancel();
    }

    const getQuizNumber = (number) => {
        setQuizNumber(number)
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <QuizTable
                        onShow={showQuiz}
                        onGetQuizNumber={getQuizNumber}
                    />
                    
                    {(isButtonClicked && !displayQuiz) ? (
                        <AddQuizForm 
                            onCancel={onButtonClickCancel}
                        />
                    ) : (!isButtonClicked && !displayQuiz) ? (
                        <Welcome />
                    ) : (
                        <Quiz
                            onClose={closeQuiz}
                            onSetQuizNumber={quizNumber}
                        />
                    )}
                    
                </div>
            </div>
        </>
    )

}

export default Main;