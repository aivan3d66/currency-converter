import React from 'react';
import './App.css';
import {currencyExchange} from './bll/store';
import {CurrencyExContainer} from "./components/CurrencyExchange/CurrencyExContainer";
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(45deg, #EECFBA, #C5DDE8);
`
const Wrapper = styled.section`
  min-width: 470px;
  max-width: 540px;
  padding: 4em;
  margin: 0 auto;
`;
const Container = styled.div`
  min-width: 460px;
  max-width: 500px;
  margin: 50px auto 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <CurrencyExContainer store={currencyExchange}/>
      </Container>
    </Wrapper>
  );
}

export default App;
