import EmailForm from '../molecules/EmailForm';
import PasswordForm from '../molecules/PasswordForm';
import BaseButton from '../atoms/buttons/BaseButton';
import BaseForm from './BaseForm';
import { useForm } from "react-hook-form";
import Error from '../atoms/Errors/Error';
import { signIn } from '../../reducks/users/operations';
import { useDispatch } from 'react-redux';

const LoginForm = () => {

    const { register, watch, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(signIn(watch('email'), watch('password')))
    };

    return (
        <BaseForm PaddingTop={16} onSubmit={handleSubmit(onSubmit)}>
            <EmailForm register={register} />
            <Error checkElement={ errors.email } />
            <PasswordForm register={register} />
            <Error checkElement={ errors.password } />
            <BaseButton type="submit" paddingTop={1.2} paddingLeft={2}>
                ログイン
            </BaseButton>
        </BaseForm>
    )
}
export default LoginForm