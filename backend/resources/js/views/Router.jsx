import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from './template/NavBar';
import {Login, About, Home} from './pages';

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route exact path={"(/)?"} component={Home} />
        </BrowserRouter>
    )
}
export default Router