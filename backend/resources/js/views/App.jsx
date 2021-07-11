import React from 'react';
import styled from 'styled-components';
import NavBar from './template/NavBar';
import Router from './Router';
import Header from './organisms/Hearder';
import Size from './styles/size';

const App = () => {
    const Main = styled.main`
        display: flex;
        height: 100%;
        @media screen and (max-width:${Size.MediaScreen.Small}px) {
            flex-direction: column-reverse;
        }
    `;

    const Section = styled.section`
        display: flex;
        flex-flow: column;
        flex-grow: 1;
    `;

    return(
        <Main>
            <NavBar />
            <Section>
                <Header/>
                <Router />
            </Section>
        </Main>
    )
}
export default App;