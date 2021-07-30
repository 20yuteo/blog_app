import * as Actions from "./actions";
import initialState from "../store/initialState";

export const TagsReducers = (state = initialState.tags, action) => {
    switch(action.type) {
        case Actions.GET_TAGS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
}