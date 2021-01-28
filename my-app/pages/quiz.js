import React, { useEffect, useState } from 'react';

import db from '../db.json';
import QuestionWidget from '../src/components/QuestionWidget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import LoadingWidget from '../src/components/LoadingWidget';
import ResultWidget from '../src/components/ResultWidget';

const screenStates = {
  loading: 'loading',
  quiz: 'quiz',
  result: 'result',
};

function QuizPage() {
  const [quizResult, setQuizResult] = useState([true, false, true]);
  const [screenState, setScreenState] = useState(screenStates.result);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const numberOfQuestions = db.questions.length;

  useEffect(() => {
    setTimeout(() => {
      // setScreenState(screenStates.quiz);
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
    <QuizBackground>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.quiz && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            numberOfQuestions={numberOfQuestions}
            onSubmit={handleQuizSubmit}
          />
        )}

        {screenState === screenStates.loading && <LoadingWidget />}

        {screenState === screenStates.result && <ResultWidget quizResult={quizResult} />}
      </QuizContainer>
    </QuizBackground>
  );
}

export default QuizPage;
