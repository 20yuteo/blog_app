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
                    required: '入力してください。',
                    pattern: {
                        value: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
                        message: 'パスワードは半角英字と半角数字それぞれ1文字以上含む8文字以上100文字以下の文字列で入力してください。'
                    },
                })}
            />
        </>
    )
}
export default PasswordForm;
