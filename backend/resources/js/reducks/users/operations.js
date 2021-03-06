import { signInAction, signOutAction, editProfileAction } from "./actions";
import { Loading } from "../loading/operations";
import {push} from 'connected-react-router';
import axios from "axios";
import { getPosts } from "../posts/operations";

export const signIn = (email, password) => {
    return async(dispatch, getState) => {
        const state = getState();
        const isSignedIn = state.users.isSignedIn

        console.log(isSignedIn);
        if (!isSignedIn){
            Loading(true, dispatch);
            axios.get('sanctum/csrf-cookie').then(res => {
                axios.post("api/login", {
                    email,
                    password
                }).then(res => {
                    console.log(res);
                    Loading(false, dispatch);
                    dispatch(signInAction({
                        isSignedIn: true,
                        id: res.data.user.id,
                        name: res.data.user.name,
                        image_url: res.data.user.profile.image_url
                    }))
                    dispatch(getPosts())
                    dispatch(push('/my_page'))
                }).catch(res => {
                    Loading(false, dispatch);
                    alert('ログインに失敗しました。');
                });
            })
        }
    }
}

export const signOut = () => {
    return async(dispatch, getState) => {
        const state = getState();
        const isSignedIn = state.users.isSignedIn

        if (isSignedIn){
            Loading(true, dispatch);
            axios.get("api/logout").then(res => {
                Loading(false, dispatch);
                dispatch(signOutAction())
                dispatch(push('/'))
            }).catch(res => {
                Loading(false, dispatch);
                alert('ログアウトに失敗しました。');
            });
        }
    }
}

export const getLoginUser = () => {
    return async(dispatch, getState) => {
        const state = getState();
        const isSignedIn = state.users.isSignedIn
        if (!isSignedIn){
            Loading(true, dispatch);
            axios.get("api/user").then(res => {
                console.log(res);
                Loading(false, dispatch);
                dispatch(signInAction({
                    isSignedIn: true,
                    id: res.data.user.id,
                    name: res.data.user.name,
                    image_url: res.data.user.profile.image_url
                }))
                dispatch(push('/my_page'))
            }).catch(res => {
                Loading(false, dispatch);
            });
        }
    }
}

export const editProfile = (uploadImage, userName) => {
    return async(dispatch) => {
        if (uploadImage !== undefined || userName !== undefined){
            Loading(true, dispatch);

            const data = new FormData();

            data.append('file', uploadImage);
            data.append('name', userName);

            axios.post("api/profile", data).then(res => {
                Loading(false, dispatch);
                dispatch(editProfileAction({
                    isSignedIn: true,
                    id: res.data.user.id,
                    name: res.data.user.name,
                    image_url: res.data.user.profile.image_url
                }))
                dispatch(push('/my_page'))
            }).catch(res => {
                Loading(false, dispatch);
            });
        }
    }
}
