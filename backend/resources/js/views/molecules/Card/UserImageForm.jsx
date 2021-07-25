import BaseFormSection from "./BaseFormSection";
import ImageFormInput from "../../atoms/Forms/CardForms/ImageFormInput";
import { ImageFormLabel } from "../../atoms/Forms/CardForms/ImageFormLabel";
import ModalProfileImage from "../../atoms/Image/ModalProfileImage";
import BaseButton from "../../atoms/buttons/BaseButton";
import { useDispatch } from "react-redux";
import { editProfileImage } from "../../../reducks/users/operations";

const UserImageForm = ({register, watch, userImage, handleSubmit}) => {
    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(editProfileImage(watch('file')[0]));
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <BaseFormSection>
                    { watch('file') !== undefined && watch('file')[0] !== undefined ? <ModalProfileImage src={URL.createObjectURL(watch('file')[0])} /> : <ModalProfileImage src={userImage} /> }
                    <ImageFormLabel>
                        画像を選択
                        <ImageFormInput type="file" name="file" accept="image/*" {...register("file")} />
                    </ImageFormLabel>
                    <BaseButton type="submit" >EDIT PROFILE IMAGE</BaseButton>
            </BaseFormSection>
        </form>
    )
}
export default UserImageForm;