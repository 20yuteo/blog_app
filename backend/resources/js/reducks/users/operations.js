import { signInAction, signOutAction } from "./actions";
import {push} from 'connected-react-router';
import axios from "axios";

export const signIn = (email, password) => {
    return async(dispatch, getState) => {
        const state = getState();
        const isSignedIn = state.users.isSignedIn

        if (!isSignedIn){
            axios.get('sanctum/csrf-cookie').then(res => {
                axios.post("api/login", {
                    email,
                    password
                }).then(res => {
                    dispatch(signInAction({
                        isSignedIn: true,
                        id: res.data.user.id,
                        name: res.data.user.name
                    }))
                    dispatch(push('/'))
                }).catch(res => {
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
            axios.get("api/logout").then(res => {
                dispatch(signOutAction())
                dispatch(push('/'))
            }).catch(res => {
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
            axios.get("api/user").then(res => {
                dispatch(signInAction({
                    isSignedIn: true,
                    id: res.data.user.id,
                    name: res.data.user.name
                }))
            }).catch(res => {

            });
        }
    }
}