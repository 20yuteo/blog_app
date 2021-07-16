import * as Actions from './actions';
import initialState from '../store/initialState';

export const LoadingReducers = (state = initialState.loading, action) => {
    switch(action.type) {
        case Actions.IS_LOADING:
            return {
                ...state,
                ...action.payload
            };
        case Actions.IS_LOADED:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
}