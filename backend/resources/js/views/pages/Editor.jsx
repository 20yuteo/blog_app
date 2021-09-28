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
import TagListWrapper from "../molecules/Tag/TagListWrapper";
import NewLinkWrapper from "../molecules/Link/NewLinkWrapper";
import Tag from "../atoms/Tag/Tag";

const Editor = () => {

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const params = useParams();

    const selector = useSelector((state) => state);

    const [id, setId] = useState(null);

    const [title, setTitle] = useState('');

    const [tag, setTag] = useState("");

    const [tagIds, setTagIds] = useState([]);

    const [content, setContent] = useState('');

    useEffect(() => {
        if (params.id !== undefined){
            selector.posts.post_array.forEach(function(post){
                if (post.id == params.id){
                    setId(post.id);
                    setTitle(post.title);
                    setContent(post.content);
                    setTag(post.tag);
                    post.tags.forEach(function(e){
                        console.log([...tagIds, { id: e.id}]);
                        setTagIds(tagIds => [...tagIds, { id: e.id}]);
                        console.log(tagIds);
                    })
                    return;
                }
            });
        }
    }, []);

    const onClick = (data, e) => {
        setLoading(true);
        if (id === null){
            dispatch(addPost(title, content, tag, tagIds, setLoading));
        } else {
            dispatch(updatePost(id, title, content, tag, tagIds, setLoading));
        }
    }

    const onAdded = (tagIds, id) => {
        let tags = [];
        if (checkSelected(tagIds, id)) {
            tagIds['tagIds'].forEach(e => {
                if(e.id !== id){
                    tags.push(e);
                }
            })
            setTagIds(tags);
        } else {
            setTagIds(tagIds => [...tagIds, { id: id}]);
        };
    }

    const checkSelected = (tagIds, id) => {
        let result = false;
        if (Array.isArray(tagIds['tagIds'])){
            tagIds['tagIds'].forEach((e) => {
                if (e.id === id){
                    result = true;
                    return true;
                }
            })
        }
        return result;
    }

    const TagList = (tagIds) => {

        let list = [];

        selector.tags.tags_array.forEach(e => {
            list.push(
                    <Tag selected={ checkSelected(tagIds, e.id) } onClick={ () => onAdded(tagIds, e.id) } >
                        <input type="checkbox"/>
                        { e.name }
                    </Tag>
                ); })

        return list;
    }

    return (
        <BaseSection>
            { loading !== false ? <StyledLoader /> :
                <form>
                    <FormLabel>TITLE</FormLabel>
                    <FormInput type="text" name="title" value={ title } onChange={(e) => {setTitle( e.target.value )}} />
                    <FormLabel>TAG</FormLabel>
                    <FormInput type="text" name="tag" value={ tag } onChange={(e) => {setTag( e.target.value )}} />
                    <TagListWrapper>
                        <TagList tagIds={ tagIds } />
                    </TagListWrapper>
                    <FormLabel>MAIN CONTENT</FormLabel>
                    <SimpleMDE value={content} onChange={(e) => setContent(e)}/>
                    <NewLinkWrapper>
                        <NewPostLink onClick={onClick}>SUBMIT</NewPostLink>
                    </NewLinkWrapper>
                </form>
            }
        </BaseSection>
    )
}
export default Editor