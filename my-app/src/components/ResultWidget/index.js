import React from 'react';
import PropTypes from 'prop-types';

import Widget from '../Widget';

function ResultWidget({ quizResult }) {
  return (
    <Widget>
      <Widget.Header>
        Tela de resultado
      </Widget.Header>

      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {quizResult.reduce((somatoriaAtual, resultadoAtual) => {
            const isAcerto = resultadoAtual === true;
            return isAcerto ? somatoriaAtual + 1 : somatoriaAtual;
          }, 0)}
          {' '}
          perguntas
        </p>
        <ul>
          {
            quizResult.map((result, index) => (
              <li>
                Resultado
                {` ${index + 1}`}
                {result === true ? ' acertou' : ' errou'}
              </li>
            ))
          }
        </ul>
      </Widget.Content>
    </Widget>
  );
}

ResultWidget.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  quizResult: PropTypes.array.isRequired,
};

export default ResultWidget;
