import EmailForm from '../molecules/EmailForm';
import PasswordForm from '../molecules/PasswordForm';
import BaseButton from '../atoms/buttons/BaseButton';
import { signIn } from '../../reducks/users/operations';

const LoginForm = ({email, password, setEmail, setPassword, dispatch}) => {
    return (
        <form>
            <EmailForm email={email} setEmail={setEmail} />
            <PasswordForm password={password} setPassword={setPassword} />
            <BaseButton type="button" onClick={() => dispatch(signIn(email, password))}>
                ログイン
            </BaseButton>
        </form>
    )
}
export default LoginForm