import styled from "styled-components";
import Content from "../../atoms/Post/Content";
import Title from "../../atoms/Post/Title";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import BaseSection from "../../organisms/Section/BaseSection";
import marked from "marked";

const StyledArticle = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const Article = () => {

    const params = useParams();

    const selector = useSelector((state) => state);

    var selectedArticle;

    selector.posts.post_array.forEach(function(post) {
        if(post.id == params.id){
            return selectedArticle = post;
        }
    });

    return(
        <BaseSection>
            <StyledArticle>
                <Title title={ selectedArticle.title } created_at={ selectedArticle.created_at } />
                <Content dangerouslySetInnerHTML={{__html: marked(selectedArticle.content) }} />
            </StyledArticle>
        </BaseSection>
    )
}