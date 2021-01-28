import React from 'react';

import db from '../../../db.json';
import Widget from '../Widget';
import Button from '../Button';

function QuestionWidget() {
  const question = db.questions[0];

  return (
    <Widget>
      <Widget.Header>
        <h3>
          Pergunta 1 de
          {` ${db.questions.length}`}
        </h3>
      </Widget.Header>

      <img
        src={question.image}
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
      />

      <Widget.Content>
        <h2>{question.title}</h2>
        <p>
          {question.description}
        </p>
        <Button>
          Confirmar
        </Button>
      </Widget.Content>
    </Widget>
  );
}

export default QuestionWidget;
