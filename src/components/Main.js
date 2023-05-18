import { useState } from "react";
import AddQuizForm from "./AddQuizForm";
import QuizTable from "./QuizTable";
import Welcome from "./Welcome";

function Main() {
    const [displayForm, setDisplayForm] = useState(false);

    if (displayForm) {
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