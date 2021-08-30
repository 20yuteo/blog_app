import React from 'react'
import { Nav } from './styles/element';
import { Route, Switch, Redirect } from 'react-router';
import {Login, Home, MyPage, Editor} from './pages';
import Post from './pages/Post';
import { Article } from './molecules/Post/Article';

const Router = (props) => {
    return (
        <Nav>
            <Switch>
                <Route exact path={"(/)?"} component={Home} />
                <Route exact path={"/login"}>
                    { !props.users.isSignedIn ? <Login /> : <Redirect to="/my_page" /> }
                </Route>
                <Route exact path={"/my_page"}>
                    { props.users.isSignedIn ? <MyPage/> : <Redirect to="/login" /> }
                </Route>
                <Route path={"/post/edit/:id"}>
                    { props.users.isSignedIn ? <Editor /> : <Redirect to="/my_page" /> }
                </Route>
                <Route exact path={"/post/create"}>
                    { props.users.isSignedIn ? <Editor /> : <Redirect to="/" /> }
                </Route>
                <Route path={"/post/:id"}>
                    { props.users.isSignedIn ? <Article/> : <Redirect to="/" /> }
                </Route>
                <Route>
                    { props.users.isSignedIn ? <Post/> : <Redirect to="/login" /> }
                </Route>
            </Switch>
        </Nav>
    )
}
export default Router