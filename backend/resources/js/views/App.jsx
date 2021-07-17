import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './template/NavBar';
import Router from './Router';
import Header from './organisms/Hearder';
import { Section } from './styles/element';
import { Main } from './styles/element';
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
                { selector.loading.isLoading ? <StyledLoader type="Puff" color={ Color.Stroke } height={80} width={80} /> : <><Header/><Router users={selector.users} /></> }
            </Section>
        </Main>
    )
}
export default App;