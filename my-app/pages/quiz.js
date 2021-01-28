import React from 'react';

import QuestionWidget from '../src/components/QuestionWidget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        Desafio do loading
      </Widget.Content>
    </Widget>
  );
}

function QuizPage() {
  return (
    <QuizBackground>
      <QuizContainer>
        <QuizLogo />
        <QuestionWidget />
        <LoadingWidget />
      </QuizContainer>
    </QuizBackground>
  );
}

export default QuizPage;
