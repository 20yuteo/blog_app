import axios from "axios";
import { getPostsAction } from "./actions";

export const addPost = (tag_name, tagsArray, content, setShow, setLoading) => {
    return async(dispatch, getState) => {
        if (tag_name !== undefined){
            axios.post('api/post', { tag_name, tagsArray, content })
                .then(res => {
                    setShow(false);
                    setLoading(false);
                }).catch(res => {
                    console.log(res);
                });
        }
    }
}

export const getPosts = () => {
    return async(dispatch, getState) => {
        axios.get("api/posts").then(res => {
            console.log(res);
            dispatch(getPostsAction({
                post_array: res.data
            }))
        }).catch(res => {
            console.log(res);
        })
    }
}