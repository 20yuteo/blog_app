import { useDispatch } from "react-redux";
import { editProfile } from "../../reducks/users/operations";
import { ImageFormLabel } from "../atoms/Forms/CardForms/ImageFormLabel";
import { useForm } from "react-hook-form";
import ModalProfileImage from "../atoms/Image/ModalProfileImage";
import { useSelector } from "react-redux";
import ImageFormInput from "../atoms/Forms/CardForms/ImageFormInput";
import NewPostLink from "../atoms/Links/NewPostLink";
import FormLabel from "../atoms/Forms/MainForms/FormLabel";
import FormInput from "../atoms/Forms/CardForms/FormInput";
import Wrapper from "../molecules/Profile/Wrapper";
import ImageWrapper from "../molecules/Profile/ImageWrapper";
import Section from "../organisms/Profile/Section";
import NewLinkWrapper from "../molecules/Link/NewLinkWrapper";

const MyProfile = () => {

    const dispatch = useDispatch();

    const selector = useSelector((state) => state);

    const { register, watch, formState: { errors } } = useForm();

    const onClick = () => {
        dispatch(editProfile(watch('file')[0], watch('name')));
    }

    return (
        <>
            <Section>
                <ImageWrapper>
                    { watch('file') !== undefined && watch('file')[0] !== undefined ? <ModalProfileImage src={URL.createObjectURL(watch('file')[0])} /> : <ModalProfileImage src={ selector.users.image_url } /> }
                    <ImageFormLabel>
                        画像を選択
                        <ImageFormInput type="file" name="file" accept="image/*" {...register("file")} />
                    </ImageFormLabel>
                </ImageWrapper>
                <Wrapper>
                    <FormLabel>
                        NAME
                    </FormLabel>
                    <FormInput type="text" name="name" {...register("name")} />
                </Wrapper>
            </Section>
            <NewLinkWrapper>
                <NewPostLink onClick={ onClick }>EDIT PROFILE</NewPostLink>
            </NewLinkWrapper>
        </>
    );
}
export default MyProfile;