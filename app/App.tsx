import React from 'react';
import styled from 'styled-components';
import GamePanel from './GamePanel';
import TypedShell from './TypedShell';

const Container = styled.div`
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-weight: 300;
  width: 100%;
  position: relative;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #ffffff; /* header background */
  border-bottom: 1px solid #cccccc; /* header separator */
  padding: 0 18px;
`;

const VerticallyCenterChildren = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 300;
  color: #000000; /* title text color */
`;

const SubTitle = styled.h2`
  font-weight: 300;
  font-size: 18px;
`;

const App = (): JSX.Element => (
  <Container>
    <Header>
      <Title>KWAK Tetris/Title>
      <SubTitle>VibeOS edition</SubTitle>
      <TypedShell>Tu tududu tududu tu tu tut kwak kwak</TypedShell>
    </Header>
    <VerticallyCenterChildren>
      <GamePanel />
    </VerticallyCenterChildren>
  </Container>
);

export default App;
