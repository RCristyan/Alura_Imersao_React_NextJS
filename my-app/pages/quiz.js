import React from 'react';

import db from '../db.json';
import QuestionWidget from '../src/components/QuestionWidget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import LoadingWidget from '../src/components/LoadingWidget';

const screenStates = {
  loading: 'loading',
  quiz: 'quiz',
  result: 'result',
};

function QuizPage() {
  const screenState = 'loading';
  const questionIndex = 0;
  const question = db.questions[questionIndex];
  const numberOfQuestions = db.questions.length;

  return (
    <QuizBackground>
      <QuizContainer>
        <QuizLogo />
        {screenState === 'quiz' && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            numberOfQuestions={numberOfQuestions}
          />
        )}

        {screenState === 'loading' && <LoadingWidget />}

        {screenState === 'result' && <div>Você acertou X questões</div>}
      </QuizContainer>
    </QuizBackground>
  );
}

export default QuizPage;
