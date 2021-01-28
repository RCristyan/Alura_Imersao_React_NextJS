import React from 'react';

import Widget from '../Widget';

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

export default LoadingWidget;
