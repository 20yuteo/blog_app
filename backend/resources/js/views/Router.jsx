import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './template/NavBar';
import {About, Home} from './pages';

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
        </BrowserRouter>
    )
}
export default Router