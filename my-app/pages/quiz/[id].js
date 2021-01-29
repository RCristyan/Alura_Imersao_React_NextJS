import React from 'react';

function QuizDaGaleraPage() {
  return (
    <div>
      Quiz da galera
    </div>
  );
}

export async function getServerSideProps(context) {
  fetch('')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Falha em obter os dados');
    })
    .then((respostaConvertedToObject) => {
      console.log(respostaConvertedToObject);
    })
    .catch((error) => {
      console.error(error);
    });

  return {
    props: {}, // will be passed to the page components as props
  };
}

export default QuizDaGaleraPage;
