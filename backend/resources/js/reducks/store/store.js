import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from "redux";
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {UsersReducers} from "../users/reducers";
import thunk from 'redux-thunk';

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            users: UsersReducers
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
}