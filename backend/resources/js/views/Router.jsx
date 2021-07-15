import React from 'react'
import styled from 'styled-components';
import { Route, Switch } from 'react-router';
import {Login, About, Home, MyPage} from './pages';

const Router = () => {
    const Nav = styled.nav`
        flex: 1;
    `;

    return (
        <Nav>
            <Switch>
                <Route exact path={"/login"} component={Login} />
                <Route exact path={"/about"} component={About} />
                <Route exact path={"(/)?"} component={Home} />
                <Route exact path={"/my_page"} component={MyPage} />
            </Switch>
        </Nav>
    )
}
export default Router