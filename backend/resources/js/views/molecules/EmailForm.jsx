import BaseFormInput from '../atoms/Forms/BaseFormInput';
import BaseFormLabel from '../atoms/Forms/BaseFormLabel';
import FormLabel from '../atoms/Forms/MainForms/FormLabel';

const EmailForm = ({register}) => {
    return (
        <>
            <FormLabel>
                Email Address
            </FormLabel>
            <BaseFormInput
                type="email"
                name="email"
                marginBottom={8}
                {...register("email", {
                    required: '入力してください。',
                    pattern: {
                        value: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/,
                        message: 'メールアドレスを入力してください。'
                    },
                })}
            />
        </>
    )
}
export default EmailForm;
