import React from 'react';
import styled from 'styled-components';
import NavBar from './template/NavBar';
import Router from './Router';
import Size from './styles/size';

const App = () => {
    const Main = styled.main`
        display: flex;
        height: 100%;
        @media screen and (max-width:${Size.MediaScreen.Small}px) {
            flex-direction: column-reverse;
        }
    `;

    return(
        <Main>
            <NavBar />
            <Router />
        </Main>
    )
}
export default App;