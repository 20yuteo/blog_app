import React from 'react'
import PageTitle from '../atoms/Title/PageTitle';
import LoginForm from '../organisms/LoginForm';

const Login = () => {
    return (
        <div>
            <PageTitle>
                Login
            </PageTitle>
            <LoginForm />
        </div>
    );
}

export default Login