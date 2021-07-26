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
import styled from "styled-components";
import { TagsCheckBox } from "../molecules/Card/TagsCheckbox";
import BaseCheckBox from "../atoms/Forms/BaseCheckBox";
import BaseButton from "../atoms/buttons/BaseButton";
import { useDispatch } from "react-redux";
import { addPost } from "../../reducks/posts/operations";

const Post = () => {

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const { register, watch, handleSubmit, formState: {errors} } = useForm();

    const TagSection = styled.section`
        display: flex;
    `;

    const onSubmit = () => {
        dispatch(addPost(watch('tag_name')));
    }

console.log(watch('tag_name'));
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
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <FormLabel>TAGS</FormLabel>
                                        <FormInput type="text" name="tag_name" {...register("tag_name")} />
                                        <TagSection>
                                            <TagsCheckBox />
                                            <TagsCheckBox />
                                            <TagsCheckBox />
                                        </TagSection>
                                        <BaseButton type="submit" minWidth={8} minHeight={2} paddingTop={1.2} paddingLeft={3}>SUBMIT</BaseButton>
                                    </form>
                                </BaseFormSection>
                            </Section>
                        </Overlay> : <span /> }
        </>
    )
}
export default Post;