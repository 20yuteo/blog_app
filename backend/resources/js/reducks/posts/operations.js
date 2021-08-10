import axios from "axios";
import { getPostsAction } from "./actions";

export const addPost = (title, content, setShow, setLoading) => {
    return async(dispatch, getState) => {
        axios.post('api/post', {title, content })
            .then(res => {
                setShow(false);
                setLoading(false);
            }).catch(res => {
                console.log(res);
            });
    }
}

export const updatePost = (id, title, content, setShow, setLoading) => {
    return async(dispatch, getState) => {
        axios.put('api/post', {id, title, content })
            .then(res => {
                setShow(false);
                setLoading(false);
            }).catch(res => {
                console.log(res);
            });
    }
}

export const getPosts = () => {
    return async(dispatch, getState) => {
        axios.get("api/posts").then(res => {
            dispatch(getPostsAction({
                post_array: res.data
            }))
        }).catch(res => {
            console.log(res);
        })
    }
}