import React from 'react';
import './App.css';
import {currencyExchange} from './bll/store';
import {CurrencyExContainer} from "./components/CurrencyExchange/CurrencyExContainer";
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
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
