import BaseFormInput from '../atoms/Forms/BaseFormInput';
import BaseFormLabel from '../atoms/Forms/BaseFormLabel';

const PasswordForm = ({password, setPassword}) => {
    return (
        <>
            <BaseFormLabel>
                Password
            </BaseFormLabel>
            <BaseFormInput
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                marginBottom={8}
            />
        </>
    )
}
export default PasswordForm;
