import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import PageTitle from '../atoms/Title/PageTitle';
import LoginForm from '../organisms/LoginForm';

const Login = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <PageTitle>
                Login
            </PageTitle>
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