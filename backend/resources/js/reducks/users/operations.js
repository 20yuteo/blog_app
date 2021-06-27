import { signInAction } from "./actions";
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