import { IsLoadedAction, IsLoadingAction } from "./actions";

export const Loading = (loading_state, dispatch) => {

    if(loading_state === true){
        dispatch(IsLoadingAction());
    } else if(loading_state === false) {
        dispatch(IsLoadedAction());
    }
}