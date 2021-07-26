import { addPostAction } from "./actions";
import { push } from "connected-react-router";
import axios from "axios";

export const addPost = (tag_name) => {
    return async(dispatch, getState) => {
        if (tag_name !== undefined){
            axios.post('api/post', { tag_name })
                .then(res => {
                    console.log(res);
                    dispatch(addPostAction({
                        tags_name: res.posts.tags_name,
                    }))
                }).catch(res => {
                    console.log(res);
                });
        }
    }
}