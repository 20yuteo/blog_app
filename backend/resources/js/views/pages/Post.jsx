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

    const [initPost, setInitPost] = useState([]);

    const [id, setId] = useState(null);

    const [title, setTitle] = useState('');

    const [content, setContent] = useState('');

    const selector = useSelector((state) => state);

    const onSubmit = (data, e) => {
        setLoading(true);

        if (id === null){
            dispatch(addPost(title, content, setShow, setLoading));
        } else {
            dispatch(updatePost(id, title, content, setShow, setLoading));
        }
    }

    const onClick = () => {
        setShow(true);
        setInitPost([]);
        setId(null);
        setTitle('');
        setContent('');
    }

    const onClickCard = id => {
        setShow(true);
        setInitPost(selector.posts.post_array[id]);
        setId(id);
        setTitle(selector.posts.post_array[id]['title']);
        setContent(selector.posts.post_array[id]['content']);
    }

    return (
        <>
        <PageTitle>
            Post
        </PageTitle>
            <BaseSection>
                <NewPostLink onClick={ () => onClick() }>New Post</NewPostLink>
            </BaseSection>
            <PostCardWrapper post_array={selector.posts.post_array} onClickCard={onClickCard} />
            { show ? <Overlay>
                            <Section>
                                <CloseLink onClick={() => setShow(false) }>×</CloseLink>
                                <BaseFormSection>
                                        { loading !== false ? <StyledLoader  type="Puff" color={ Color.Card.Form.Color } height={80} width={80} /> :
                                            <form onSubmit={onSubmit}>
                                                <FormLabel>TITLE</FormLabel>
                                                <FormInput type="text" name="title" value={ title } onChange={(e) => {setTitle( e.target.value )}} />
                                                <FormLabel>MAIN CONTENT</FormLabel>
                                                <Editor
                                                    apiKey='q5zp8m09wildzftbqilyqzfr2ifw3ls8z31e5rkpu9sjri40'
                                                    init={{
                                                        plugins: 'link image code autosave',
                                                        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code image link',
                                                        height: 500,
                                                    }}
                                                    value={ content }
                                                    onEditorChange={(newValue, editor) => setContent( newValue )}
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