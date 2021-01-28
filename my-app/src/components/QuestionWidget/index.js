import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Widget from '../Widget';
import Button from '../Button';
import AlternativesForm from '../AlternativesForm';

function QuestionWidget({
  question,
  questionIndex,
  numberOfQuestions,
  onSubmit,
  addResult,
}) {
  const questionId = `question_${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const isCorrect = selectedAlternative === question.answer;
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const hasAlternativeSelected = selectedAlternative !== undefined;

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
          width: '200px',
          height: '200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
          objectFit: 'cover',
        }}
      />

      <Widget.Content>
        <h2>{question.title}</h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(infoDoEvento) => {
            infoDoEvento.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative_${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;

            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                //   style={{ display: 'none' }}
                  id={alternativeId}
                  type="radio"
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>

          { isQuestionSubmited
            && isCorrect
            && <p>Você acertou!</p>}

          { isQuestionSubmited
            && !isCorrect
            && <p>Você errou!</p>}

        </AlternativesForm>

      </Widget.Content>
    </Widget>
  );
}

QuestionWidget.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  numberOfQuestions: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default QuestionWidget;
