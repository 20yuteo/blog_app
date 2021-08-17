import PageTitle from "../atoms/Title/PageTitle"
import BaseSection from "../organisms/Section/BaseSection";
import NewPostLink from "../atoms/Links/NewPostLink";
import { useState } from "react";
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
        setId(selector.posts.post_array[id]['id']);
        setTitle(selector.posts.post_array[id]['title']);
        setContent(selector.posts.post_array[id]['content']);
    }

    return (
        <>
            <BaseSection>
                <PageTitle>
                    Post
                </PageTitle>
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
                                                        selector: "textarea",
                                                        plugins: [
                                                            "advlist autolink lists link image preview anchor code textpattern"
                                                        ],
                                                        toolbar: "bold italic | bullist numlist | link image",
                                                        height: 500,
                                                        textpattern_patterns: [
                                                            {start: '*', end: '*', format: 'italic'},
                                                            {start: '**', end: '**', format: 'bold'},
                                                            {start: '#', format: 'h1'},
                                                            {start: '##', format: 'h2'},
                                                            {start: '###', format: 'h3'},
                                                            {start: '####', format: 'h4'},
                                                            {start: '#####', format: 'h5'},
                                                            {start: '######', format: 'h6'},
                                                            {start: '1. ', cmd: 'InsertOrderedList'},
                                                            {start: '* ', cmd: 'InsertUnorderedList'},
                                                            {start: '- ', cmd: 'InsertUnorderedList' },
                                                            {start: '---', replacement: '<hr/>'},
                                                            {start: '--', replacement: '—'},
                                                            {start: '-', replacement: '—'},
                                                            {start: '//code', replacement: '<code style="width: 100%; display: inline-block; padding: 0.1em 0.25em; color: #fffffe; background-color: #001858; border-radius: 3px; border: solid 1px #001858; overflow: scroll; font-family: Consolas, Menlo, Monaco, -apple-system, BlinkMacSystemFont, "Segoe UI", Meiryo, monospace;">code here</code>'}
                                                        ]
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