import { getTagsAction } from "./actions";
import { Loading } from "../loading/operations";
import axios from "axios";

export const getTags = () => {
    return async(dispatch, getState) => {

        axios.get("api/tags").then(res => {
            dispatch(getTagsAction({
                tag_array : res.data,
            }))
        }).catch(res => {
            console.log(res);
        });
    }
}