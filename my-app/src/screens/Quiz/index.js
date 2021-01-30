import React, { useEffect, useState } from 'react';

// import db from '../../../db.json';
import QuestionWidget from '../../components/QuestionWidget';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import QuizLogo from '../../components/QuizLogo';
import LoadingWidget from '../../components/LoadingWidget';
import ResultWidget from '../../components/ResultWidget';

const screenStates = {
  loading: 'loading',
  quiz: 'quiz',
  result: 'result',
};

function QuizPage({ externalQuestions, externalBg }) {
  const [quizResult, setQuizResult] = useState([]);
  const [screenState, setScreenState] = useState(screenStates.loading);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const numberOfQuestions = externalQuestions.length;
  const bg = externalBg;

  function addResult(result) {
    setQuizResult([
      ...quizResult,
      result,
    ]);
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.quiz);
    }, 1000);
  }, []);

  function handleQuizSubmit() {
    const nextQuestion = questionIndex + 1;

    if (nextQuestion < numberOfQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.result);
    }
  }

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.quiz && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            numberOfQuestions={numberOfQuestions}
            onSubmit={handleQuizSubmit}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.loading && <LoadingWidget />}

        {screenState === screenStates.result && <ResultWidget quizResult={quizResult} />}
      </QuizContainer>
    </QuizBackground>
  );
}

export default QuizPage;
