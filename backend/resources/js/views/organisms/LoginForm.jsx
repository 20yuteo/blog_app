import EmailForm from '../molecules/EmailForm';
import PasswordForm from '../molecules/PasswordForm';
import BaseButton from '../atoms/buttons/BaseButton';
import BaseForm from './BaseForm';
import { useForm } from "react-hook-form";
import { signIn } from '../../reducks/users/operations';

const LoginForm = ({dispatch}) => {

    const { register, watch, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = () => {
        dispatch(signIn(watch('email'), watch('password')))
    };

    return (
        <BaseForm PaddingTop={16} onSubmit={handleSubmit(onSubmit)}>
            <EmailForm register={register} />
            {errors.email && errors.email.type === "required" && <span>This is required</span>}
            <PasswordForm register={register} />
            {errors.password && errors.password.type === "required" && <span>This is required</span>}
            <BaseButton type="submit" paddingTop={1.2} paddingLeft={2}>
                ログイン
            </BaseButton>
        </BaseForm>
    )
}
export default LoginForm