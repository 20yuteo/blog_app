import BaseFormInput from '../atoms/Forms/BaseFormInput';
import BaseFormLabel from '../atoms/Forms/BaseFormLabel';

const EmailForm = ({register}) => {
    return (
        <>
            <BaseFormLabel>
                Email Address
            </BaseFormLabel>
            <BaseFormInput
                type="email"
                name="email"
                marginBottom={8}
                {...register("email", {
                    required: true,
                    pattern: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/,
                })}
            />
        </>
    )
}
export default EmailForm;
