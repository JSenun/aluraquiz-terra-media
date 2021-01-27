/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.mainBg};
  overflow: hidden;

  h1,h2,h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p{
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  *{
    margin:0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child{
    margin-top: 0;
  }

  & > *:last-child{
    margin-bottom: 0;
  }

  ul {
    list-style:none;
    padding:0;
  }

  & input {
    height: 40px;
    width: 100%;
    padding: 0 15px;
    margin: 16px 0;
    border: 1.5px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.mainBg};
    color: ${({ theme }) => theme.colors.contrastText};
    font-size: 14px;
    letter-spacing: 0.15px;
    border-radius: 4px;
    outline: none;
  }

  & button {
    height: 40px;
    width: 100%;
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.secondary};
    font-size: 14px;
    letter-spacing: 0.15px;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    cursor: pointer;
    transition: 200ms;
  }
  & button:hover {
    background-color: ${({ theme }) => theme.colors.hoverButton};
  }
  & img{
    width:100%;
    margin: 0;
  }
`;
export default Widget;
