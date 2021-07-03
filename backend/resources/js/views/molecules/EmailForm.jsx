import BaseFormInput from '../atoms/Forms/BaseFormInput';
import BaseFormLabel from '../atoms/Forms/BaseFormLabel';

const EmailForm = ({email, setEmail}) => {
    return (
        <>
            <BaseFormLabel>
                Email Address
            </BaseFormLabel>
            <BaseFormInput
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </>
    )
}
export default EmailForm;
