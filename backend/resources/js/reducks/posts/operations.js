import axios from "axios";
import {push} from 'connected-react-router';
import { getPostsAction } from "./actions";

export const addPost = (title, content, setLoading) => {
    return async(dispatch, getState) => {
        axios.post(`/api/post`, {title, content })
            .then(res => {
                setLoading(false);
                dispatch(push('/post'));
            }).catch(res => {
                console.log(res);
                dispatch(push('/post'));
            });
    }
}

export const updatePost = (id, title, content, setLoading) => {
    return async(dispatch, getState) => {
        axios.put(`/api/post/` + id, {title, content })
            .then(res => {
                setLoading(false);
                dispatch(push('/post'));
            }).catch(res => {
                console.log(res);
                dispatch(push('/post'));
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