import BaseFormSection from "./BaseFormSection";
import FormInput from "../../atoms/Forms/CardForms/FormInput";
import FormLabel from "../../atoms/Forms/CardForms/FormLabel";

const UserNameForm = ({ register}) => {
    return (
        <BaseFormSection>
            <FormLabel>USER NAME</FormLabel>
            <FormInput type="text" name="name" {...register("name")} />
        </BaseFormSection>
    )
}
export default UserNameForm;