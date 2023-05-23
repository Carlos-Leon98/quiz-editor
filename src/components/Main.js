import { useState } from "react";
import AddQuizForm from "./AddQuizForm";
import QuizTable from "./QuizTable";
import Welcome from "./Welcome";
import Quiz from "./Quiz";

function Main({ isButtonClicked, onButtonClickCancel }) {
    const [displayQuiz, setDisplayQuiz] = useState(false);

    const showQuiz = () => {
        setDisplayQuiz(true);
    }

    const closeQuiz = () => {
        setDisplayQuiz(false);
        onButtonClickCancel();
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <QuizTable
                        onShow={showQuiz}
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
                        />
                    )}
                    
                </div>
            </div>
        </>
    )

}

export default Main;