import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
  color: #ffffff;
}
html, body {
  min-height: 100vh;
}
#__next {
  flex: 1;
  display: flex;
  flex-direction: column;
}
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AluraQuiz - Terra Média</title>
        <link href="data:image/x-icon;base64,AAABAAEAEBAAAAEACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAADDxoAD++8QAafLQAAlCcAAxfowABTZQAFm2tAA1gmAAEaq4ABna+AAR5vgAcg8IAAkiSAC+35QAIaqYAK5XJACqh2QBL1/4AAne8ADSl3gA5tugAAVadAAd0tAAYk9AAE2isAEXE8gAlmNIAA3K6ADCf1wACVJsAIp7jAAJwuAABY6sABmCrAAtjmgAFVakAI37BAAhrpQAqpt0ARMP2ABR1sgAEZaYAAn3GAAaEywAWbbAAD3W7AEnP/gAShsUAM6HbAANzuQAKaKYAC2imAEK88gAzo94ANaPeAEK/8gACYaoAOb7tAAFHkAAwnNEAAkeQADGe3ABBxfIAN6XhAB10tgAEVJUAO6/mABBxtwADTKQADWOlAAZnswAFcbgAAV2mAB10twAJd8AACmadAARzuwAMYJUAD4TNAEfD+QARbrAAF4a/ABNusAAdjcQAEXu1AAZ4vgAHb64AKpfRAErT/gA6uuoAJpHBABFqowAHUJoABXnEAEa68gAroNkAKIjKADq87QAJYpkAA2+3AABVnQA3uOgABWanAGPR+wAVZ6wAOq3mAABDjgAMZ5wADmq9AAFTmwALe78ADWOXAEPA8wArktAAF2WqABx8vAAEZ7YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQ9RTtdTxQAAAAAAAAAFAQNayRtc3MfEQAAAAAAIE1HIi5cB0olYQ4RAAAAFyZzTghGQXJDFWY4NQAACURMD0gZHQAAAAAAZW5ZADRXCyEMAAAAAAAAABYKWx4sEwZYAAAAAAAAABxLMlR1K0InAAAAAAAAAFIzMmNaXmdRAAAAAAAAAAEjViowAGRwUgAAAAAAUjlSVW8pAABJVxRTUlIFaS0DYBh0AAAAAGxxPzo2Pjw8EBtgAAAAAAAAEigaakA3MRRiAAAAAAAAAAACL1BoXwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAD8BwAA8AMAAOABAADAAQAAgPgAAIP4AAAH8AAAD+AAAB/BAAAfAwAAAAcAAIAPAADAHwAA4P8AAP//AAA=" rel="icon" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <meta name="title" content="Quiz da Terra Média!" />
        <meta name="description" content="Teste os seus conhecimentos sobre o universo escrito por J.R.R. Tolkien." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aluraquiz-terra-media.jsenun.vercel.app/" />
        <meta property="og:title" content="Quiz da Terra Média!" />
        <meta property="og:description" content="Teste os seus conhecimentos sobre o universo escrito por J.R.R. Tolkien." />
        <meta property="og:image" content="" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluraquiz-terra-media.jsenun.vercel.app/" />
        <meta property="twitter:title" content="Quiz da Terra Média!" />
        <meta property="twitter:description" content="Teste os seus conhecimentos sobre o universo escrito por J.R.R. Tolkien." />
        <meta property="twitter:image" content="" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading  */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
