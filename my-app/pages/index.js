import Head from 'next/head';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GithubCorner from '../src/components/GithubCorner';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Modelo Base</title>
      </Head>

      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The Legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                placeholder="Digite seu nome"
                onChange={(evento) => {
                  setName(evento.target.value);
                }}
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quizes da galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus, quod suscipit consequuntur nam nesciunt sequi
              quidem, incidunt sunt sint adipisci culpa explicabo, rem sed
              reiciendis quisquam inventore et enim modi.
            </p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl="https://github.com/RCristyan" />
    </QuizBackground>
  );
}
