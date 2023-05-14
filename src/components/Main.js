import AddQuizForm from "./AddQuizForm";
import QuizTable from "./QuizTable";

function Main() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <QuizTable />
                    
                    <AddQuizForm />
                </div>
            </div>
        </>
    );
}

export default Main;