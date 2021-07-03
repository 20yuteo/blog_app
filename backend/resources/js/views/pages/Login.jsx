import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import LoginForm from '../organisms/LoginForm';

const Login = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h2>Login</h2>
            <LoginForm
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                dispatch={dispatch}
            />
        </div>
    );
}

export default Login