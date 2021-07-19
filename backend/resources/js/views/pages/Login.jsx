import React from 'react'
import { useDispatch } from 'react-redux';
import PageTitle from '../atoms/Title/PageTitle';
import LoginForm from '../organisms/LoginForm';

const Login = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <PageTitle>
                Login
            </PageTitle>
            <LoginForm
                dispatch={dispatch}
            />
        </div>
    );
}

export default Login