import React from 'react'
import { Nav } from './styles/element';
import { Route, Switch, Redirect } from 'react-router';
import {Login, About, Home, MyPage} from './pages';
import Post from './pages/Post';

const Router = (props) => {
    return (
        <Nav>
            <Switch>
                <Route exact path={"/about"} component={About} />
                <Route exact path={"(/)?"} component={Home} />
                <Route exact path={"/login"}>
                    { !props.users.isSignedIn ? <Login /> : <Redirect to="/my_page" /> }
                </Route>
                <Route exact path={"/my_page"}>
                    { props.users.isSignedIn ? <MyPage/> : <Redirect to="/login" /> }
                </Route>
                <Route>
                    { props.users.isSignedIn ? <Post/> : <Redirect to="/login" /> }
                </Route>
            </Switch>
        </Nav>
    )
}
export default Router