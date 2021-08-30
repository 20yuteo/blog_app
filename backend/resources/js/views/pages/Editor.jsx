import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import BaseSection from "../organisms/Section/BaseSection";
import SimpleMDE from 'react-simplemde-editor';
import { useState, useEffect } from "react";
import FormLabel from "../atoms/Forms/MainForms/FormLabel";
import FormInput from "../atoms/Forms/CardForms/FormInput";
import { addPost, updatePost } from "../../reducks/posts/operations";
import NewPostLink from "../atoms/Links/NewPostLink";
import StyledLoader from "../atoms/Loader/StyledLoader";

const Editor = () => {

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const params = useParams();

    const selector = useSelector((state) => state);

    const [id, setId] = useState(null);

    const [title, setTitle] = useState('');

    const [content, setContent] = useState('');

    useEffect(() => {
        if (params.id !== undefined){
            selector.posts.post_array.forEach(function(post){
                if (post.id == params.id){
                    setId(post.id);
                    setTitle(post.title);
                    setContent(post.content);
                    return;
                }
            });
        }
    }, []);

    const onClick = (data, e) => {
        setLoading(true);
        if (id === null){
            dispatch(addPost(title, content, setLoading));
        } else {
            dispatch(updatePost(id, title, content, setLoading));
        }
    }

    return (
        <BaseSection>
            { loading !== false ? <StyledLoader /> :
                <form>
                    <FormLabel>TITLE</FormLabel>
                    <FormInput type="text" name="title" value={ title } onChange={(e) => {setTitle( e.target.value )}} />
                    <FormLabel>MAIN CONTENT</FormLabel>
                    <SimpleMDE value={content} onChange={(e) => setContent(e)}/>
                    <NewPostLink onClick={onClick}>SUBMIT</NewPostLink>
                </form>
            }
        </BaseSection>
    )
}
export default Editor