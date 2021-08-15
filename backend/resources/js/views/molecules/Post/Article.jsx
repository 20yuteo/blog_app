import styled from "styled-components";
import Content from "../../atoms/Post/Content";
import Title from "../../atoms/Post/Title";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import BaseSection from "../../organisms/Section/BaseSection";
import PageTitle from "../../atoms/Title/PageTitle";

const StyledArticle = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const Article = (props) => {
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
            <PageTitle>
                Article
            </PageTitle>
            <StyledArticle>
                <Title>
                    { selectedArticle.title }
                </Title>
                <Content dangerouslySetInnerHTML={{__html: selectedArticle.content }} />
            </StyledArticle>
        </BaseSection>
    )
}