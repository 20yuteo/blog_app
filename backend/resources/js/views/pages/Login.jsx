import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import { signIn } from '../../reducks/users/operations';

const Login = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h2>Login</h2>
            <form>
            <label>email</label>
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <label>password</label>
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button type="button" onClick={() => dispatch(signIn(email, password))}>
                ログインする
            </button>
            </form>
        </div>
    );
}

export default Login