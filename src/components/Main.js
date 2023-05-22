import AddQuizForm from "./AddQuizForm";
import QuizTable from "./QuizTable";
import Welcome from "./Welcome";

function Main({ isButtonClicked, onButtonClickCancel }) {

    if (isButtonClicked) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <QuizTable />
                        
                        <AddQuizForm 
                            onCancel={onButtonClickCancel}
                        />
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <QuizTable />
                        
                        <Welcome />
                    </div>
                </div>
            </>
        );
    }

}

export default Main;