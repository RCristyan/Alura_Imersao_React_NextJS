import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import QuizScreen from '../../src/screens/Quiz';

function QuizDaGaleraPage({ dbExterno }) {
  return (

    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>

  );
}

export async function getServerSideProps(context) {
  const [nomeDoProjeto, nomeDoUsuario] = context.query.id.split('___');

  const dbExterno = await fetch(`https://${nomeDoProjeto}.${nomeDoUsuario}.vercel.app/api/db`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Falha em obter os dados');
    })
    .then((respostaConvertedToObject) => respostaConvertedToObject)
    .catch((error) => {
      console.error(error);
    });

  return {
    props: {
      dbExterno,
    }, // will be passed to the page components as props
  };
}

export default QuizDaGaleraPage;
