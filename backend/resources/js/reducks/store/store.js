import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from "redux";
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {UsersReducers} from "../users/reducers";
import { LoadingReducers } from "../loading/reducers";
import { PostsReducers } from "../posts/reducers";
import { TagsReducers } from "../tags/reducers";
import thunk from 'redux-thunk';

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            users: UsersReducers,
            loading: LoadingReducers,
            posts: PostsReducers,
            tags: TagsReducers,
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
}