import React from 'react'
import { Route, Switch } from 'react-router';
import NavBar from './template/NavBar';
import {Login, About, Home} from './pages';

const Router = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path={"/login"} component={Login} />
                <Route exact path={"/about"} component={About} />
                <Route exact path={"(/)?"} component={Home} />
            </Switch>
        </>
    )
}
export default Router