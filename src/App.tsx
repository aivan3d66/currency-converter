import React from 'react';
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

export const App = () => {
  return (
    <Container>
      <Wrapper>
        <CurrencyExContainer store={currencyExchange}/>
      </Wrapper>
    </Container>
  );
}
