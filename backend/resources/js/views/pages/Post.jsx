import PageTitle from "../atoms/Title/PageTitle"
import BaseSection from "../organisms/Section/BaseSection";
import NewPostLink from "../atoms/Links/NewPostLink";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Overlay } from "../atoms/Overlay/Overlay";
import Section from "../organisms/Profile/Section";
import CloseLink from "../atoms/Links/CloseLink";
import FormInput from "../atoms/Forms/CardForms/FormInput";
import FormLabel from "../atoms/Forms/CardForms/FormLabel";
import BaseFormSection from "../molecules/Card/BaseFormSection";
import BaseButton from "../atoms/buttons/BaseButton";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../reducks/posts/operations";
import { getTags } from "../../reducks/tags/operations";
import { TagsWrapper } from "../molecules/TagsWrapper";
import Color from "../styles/color";
import StyledLoader from "../atoms/Loader/StyledLoader";

const Post = () => {

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const selector = useSelector((state) => state);

    const { register, watch, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = () => {
        dispatch(addPost(watch('tagName')));
    }

    if (show && selector.tags.tag_array.length === 0){
        dispatch(getTags());
    }

    return (
        <>
            <PageTitle>
                Post
            </PageTitle>
            <BaseSection>
                <NewPostLink onClick={ () => setShow(true) }>New Post</NewPostLink>
            </BaseSection>
            { show ? <Overlay>
                            <Section>
                                <CloseLink onClick={() => setShow(false) }>×</CloseLink>
                                <BaseFormSection>
                                        { selector.tags.tag_array.length === 0 ? <StyledLoader  type="Puff" color={ Color.Card.Form.Color } height={80} width={80} /> :
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <FormLabel>TAGS</FormLabel>
                                                <FormInput type="text" name="tagName" {...register("tagName")} />
                                                <TagsWrapper tag_array={selector.tags.tag_array} register={register} watch={watch} />
                                                <BaseButton type="submit" minWidth={8} minHeight={2} paddingTop={1.2} paddingLeft={3}>SUBMIT</BaseButton>
                                            </form>
                                        }
                                </BaseFormSection>
                            </Section>
                        </Overlay> : <span /> }
        </>
    )
}
export default Post;