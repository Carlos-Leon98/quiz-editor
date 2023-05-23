import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function Quiz({ onClose, onSetQuizNumber }) {
    const quizList = JSON.parse(localStorage.getItem("quizList"));
    
    return (
        <main className="col-9 text-center p-4">
            <h3>{quizList[onSetQuizNumber].name}</h3>

            {quizList[onSetQuizNumber].questions.map(question => (
                <div>
                    {question.value}
                </div>
            ))}
            <Button
                variant='outline-danger'
                onClick={() => {
                    onClose();
                    console.log(quizList[onSetQuizNumber].name);
                }}
            >
                Close
            </Button>
        </main>
    )
}

export default Quiz;