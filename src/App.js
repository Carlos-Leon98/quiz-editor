import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main'
import { useState } from 'react';

function App() {
  const [ addNewQuiz, setAddNewQuiz ] = useState(false);

  const addNewQuizButton = () => {
    setAddNewQuiz(true);
  };

  const cancelAddNewQuizButton = () => {
    setAddNewQuiz(false);
  }

  return (
    <>
      <Header
        onButtonClick={addNewQuizButton}
      />
      <Main
        isButtonClicked={addNewQuiz}
        onButtonClickCancel={cancelAddNewQuizButton}
      />
    </>
  );
}

export default App;
