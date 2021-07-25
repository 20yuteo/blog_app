import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './template/NavBar';
import Router from './Router';
import Header from './organisms/Header/Hearder';
import { Section } from './styles/element';
import { Main } from './styles/element';
import { ErrorBoundary } from '../ErrorBoundary';
import { getLoginUser } from '../reducks/users/operations';
import StyledLoader from './atoms/Loader/StyledLoader';
import Color from './styles/color';

const App = () => {

    const selector = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLoginUser());
    }, []);

    return(
        <Main>
            <NavBar />
            <Section>
                <ErrorBoundary>
                    { selector.loading.isLoading ? <StyledLoader type="Puff" color={ Color.Stroke } height={80} width={80} /> : <><Header/><Router users={selector.users} /></> }
                </ErrorBoundary>
            </Section>
        </Main>
    )
}
export default App;