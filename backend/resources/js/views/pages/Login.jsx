import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import { signIn } from '../../reducks/users/operations';
import BaseButton from '../atoms/buttons/BaseButton';
import BaseFormInput from '../atoms/Forms/BaseFormInput';
import BaseFormLabel from '../atoms/Forms/BaseFormLabel';

const Login = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h2>Login</h2>
            <form>
            <BaseFormLabel>
                email address
            </BaseFormLabel>
            <BaseFormInput
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <BaseFormLabel>
                password
            </BaseFormLabel>
            <BaseFormInput
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <BaseButton type="button" onClick={() => dispatch(signIn(email, password))}>
                ログインする?
            </BaseButton>
            </form>
        </div>
    );
}

export default Login