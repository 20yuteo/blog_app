import styled from "styled-components";
import Content from "../../atoms/Post/Content";
import Title from "../../atoms/Post/Title";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import BaseSection from "../../organisms/Section/BaseSection";
import marked from "marked";
import NewPostLink from "../../atoms/Links/NewPostLink";
import { useState, useEffect } from "react";

const StyledArticle = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const Article = () => {

    const params = useParams();

    const selector = useSelector((state) => state);

    const [title, setTitle] = useState('');

    const [content, setContent] = useState('');

    const [createdAt, setCreatedAt] = useState('');

    useEffect(() => {
        if (params.id !== undefined){
            selector.posts.post_array.forEach(function(post) {
                if(post.id == params.id){
                    setTitle(post.title);
                    setContent(post.content);
                    setCreatedAt(post.created_at);
                    return true;
                }
            });
        }
    }, []);

    return(
        <BaseSection>
            { params.id !== undefined && selector.users.isSignedIn ? <NewPostLink to={'/post/edit/' + params.id } >Edit Post</NewPostLink> : '' }
            <StyledArticle>
                <Title title={ title } created_at={ createdAt } />
                <Content dangerouslySetInnerHTML={{__html: marked(content) }} />
            </StyledArticle>
        </BaseSection>
    )
}