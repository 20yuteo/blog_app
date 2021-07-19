import BaseFormInput from '../atoms/Forms/BaseFormInput';
import BaseFormLabel from '../atoms/Forms/BaseFormLabel';

const PasswordForm = ({register}) => {
    return (
        <>
            <BaseFormLabel>
                Password
            </BaseFormLabel>
            <BaseFormInput
                type="password"
                name="password"
                marginBottom={8}
                {...register("password", {
                    required: true,
                })}
            />
        </>
    )
}
export default PasswordForm;
