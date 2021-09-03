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
import { getPosts } from '../reducks/posts/operations';

const App = () => {

    const selector = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLoginUser());
        dispatch(getPosts());
    }, []);

    return(
        <Main>
            { selector.users.isSignedIn ? <NavBar /> : '' }
            <Section>
                <ErrorBoundary>
                    { selector.loading.isLoading ? <StyledLoader /> : <><Header/><Router users={selector.users} /></> }
                </ErrorBoundary>
            </Section>
        </Main>
    )
}
export default App;