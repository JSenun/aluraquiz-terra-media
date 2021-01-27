/* eslint-disable linebreak-style */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Widget from '../widget';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 0.5s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 50px;
  height: 50px;
  margin: auto;
  border-radius: 50%;
`;
export default function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>

      <Widget.Content>
        <Spinner />
      </Widget.Content>
    </Widget>

  );
}
