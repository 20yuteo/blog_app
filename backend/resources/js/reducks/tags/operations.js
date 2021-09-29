import axios from "axios";
import { push } from "connected-react-router";
import { getTagsActions } from "./actions";

export const getTags = () => {
    return async(dispatch, getState) => {
        axios.get("api/tags").then(res => {
            dispatch(getTagsActions({
                tags_array: res.data
            }))
        }).catch(res => {
            console.log(res);
        })
    }
}