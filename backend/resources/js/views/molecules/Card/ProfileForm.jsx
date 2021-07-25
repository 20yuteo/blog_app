import { useDispatch } from "react-redux";
import BaseFormSection from "./BaseFormSection";
import UserNameForm from "./UserNameForm";
import BaseButton from "../../atoms/buttons/BaseButton";
import { editProfile } from "../../../reducks/users/operations";

export const ProfileForm = ({register, watch, handleSubmit}) => {

    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(editProfile(watch('name')))
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <BaseFormSection>
                <UserNameForm register={register} />
                <BaseButton type="submit">SUBMIT</BaseButton>
            </BaseFormSection>
        </form>
    )
}