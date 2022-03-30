import React from 'react';
import {currencyExchange} from './bll/store';
import {CurrencyExContainer} from "./components/CurrencyExchange/CurrencyExContainer";
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`
const Wrapper = styled.section`
  min-width: 540px;
  max-width: 540px;
  height: 100vh;
  padding: 4em;
  margin: 0 auto;
  background: linear-gradient(45deg, #EECFBA, #C5DDE8) no-repeat center 100%;
  background-size: cover;
`;

export const App = () => {
  return (
    <Container>
      <Wrapper>
        <CurrencyExContainer store={currencyExchange}/>
      </Wrapper>
    </Container>
  );
}
