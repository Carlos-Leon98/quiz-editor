import DeleteButton from "./DeleteButton";

function QuizTable() {
    const quizList = JSON.parse(localStorage.getItem("quizList")) || [];

    const removeQuiz = (i) => {
        const newQuizzes = [...quizList];
        newQuizzes.splice(i, 1);

        localStorage.setItem("quizList", JSON.stringify(newQuizzes));
    }

    return (
        <aside className="col-3">
            <table className="table table-hover">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">
                            Your Quizzes
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {quizList.map((quiz, index) => (
                        <tr 
                            key={index}
                            onClick={() => {
                                quiz.display = true;
                            }}
                        >
                            <td className="d-flex justify-content-between">
                                {quiz.name}
                                <DeleteButton 
                                    index={index}
                                    onClick={() => removeQuiz(index)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </aside>
    );
}
export default QuizTable;