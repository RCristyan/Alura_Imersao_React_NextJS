import React from 'react';
import PropTypes from 'prop-types';

import Widget from '../Widget';
import Button from '../Button';

function QuestionWidget({
  question,
  questionIndex,
  numberOfQuestions,
}) {
  const questionId = `question_${questionIndex}`;

  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${numberOfQuestions}`}
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

        <form action="">
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative_${alternativeIndex}`;

            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input
                //   style={{ display: 'none' }}
                  id={alternativeId}
                  type="radio"
                  name={questionId}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit">
            Confirmar
          </Button>
        </form>

      </Widget.Content>
    </Widget>
  );
}

QuestionWidget.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  numberOfQuestions: PropTypes.number.isRequired,
};

export default QuestionWidget;
