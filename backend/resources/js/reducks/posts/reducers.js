import * as Actions from './actions';
import initialState from '../store/initialState';

export const PostsReducers = (state = initialState.posts, action) => {
    switch(action.type) {
        case Actions.ADD_POST:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
}