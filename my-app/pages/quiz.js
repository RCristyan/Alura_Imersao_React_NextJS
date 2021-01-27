import React from 'react';

import db from '../db.json';
import Button from '../src/components/Button';
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
        <Widget>
          <Widget.Header>
            <h3>
              Pergunta 1 de
              {` ${db.questions.length}`}
            </h3>
          </Widget.Header>

          <img
            src="https://placehold.it/400x400"
            alt="Descrição"
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
            }}
          />

          <Widget.Content>
            <h2>Título</h2>
            <p>
              Descrição
            </p>
            <Button>
              Confirmar
            </Button>
          </Widget.Content>
        </Widget>

        <LoadingWidget />
      </QuizContainer>
    </QuizBackground>
  );
}

export default QuizPage;
