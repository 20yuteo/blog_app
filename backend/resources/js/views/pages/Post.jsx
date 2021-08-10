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
import { addPost, updatePost } from "../../reducks/posts/operations";
import { Editor } from '@tinymce/tinymce-react';
import Color from "../styles/color";
import StyledLoader from "../atoms/Loader/StyledLoader";
import { PostCardWrapper } from "../molecules/Card/PostCardWrapper";

const Post = () => {

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const [loading, setLoading] = useState(false);

    const [value, setValue] = useState(undefined);

    const [initPost, setInitPost] = useState([]);

    const selector = useSelector((state) => state);

    const { register, watch, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (data, e) => {
        setLoading(true);

        var content;

        if (value === undefined){
            content = initPost['content'];
        } else {
            content = value;
        }

        if (initPost['id'] === null){
            dispatch(addPost(data.title, content, setShow, setLoading));
        } else {
            dispatch(updatePost(initPost['id'], data.title, content, setShow, setLoading));
        }
    }

    return (
        <>
        <PageTitle>
            Post
        </PageTitle>
            <BaseSection>
                <NewPostLink onClick={ () => setShow(true) }>New Post</NewPostLink>
            </BaseSection>
            <PostCardWrapper post_array={selector.posts.post_array} setInitPost={setInitPost} setShow={setShow} />
            { show ? <Overlay>
                            <Section>
                                <CloseLink onClick={() => setShow(false) }>×</CloseLink>
                                <BaseFormSection>
                                        { loading !== false ? <StyledLoader  type="Puff" color={ Color.Card.Form.Color } height={80} width={80} /> :
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <FormLabel>TITLE</FormLabel>
                                                <FormInput type="text" name="title" defaultValue={ initPost['title'] } {...register("title")} />
                                                <FormLabel>MAIN CONTENT</FormLabel>
                                                <Editor
                                                    apiKey='q5zp8m09wildzftbqilyqzfr2ifw3ls8z31e5rkpu9sjri40'
                                                    init={{
                                                        plugins: 'link image code autosave',
                                                        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code image link',
                                                        height: 500,
                                                    }}
                                                    initialValue={ initPost['content'] }
                                                    onEditorChange={(newValue, editor) => setValue(newValue)}
                                                />
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