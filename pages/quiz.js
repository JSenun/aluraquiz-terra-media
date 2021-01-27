/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

const QuizContainer = styled.div`
  width: 100%;
  max-width:350px;
  padding-top:45px;
  margin: auto 10%;
  
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <img src={db.questions[0].image} alt="Gif do Gollum" />
            <p>{db.questions[0].title}</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/JSenun" />
    </QuizBackground>
  );
}
