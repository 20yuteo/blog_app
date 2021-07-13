import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import NavBar from './template/NavBar';
import Router from './Router';
import Header from './organisms/Hearder';
import Size from './styles/size';
import { getLoginUser } from '../reducks/users/operations';

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


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLoginUser());
    });

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