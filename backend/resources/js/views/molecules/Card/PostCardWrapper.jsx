import styled from "styled-components";
import Size from "../../styles/size";
import PostCard from "./PostCard";

const StyledPostCardWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 560px;
    max-height: 400px;
    margin: auto;
    padding: 16px;
    @media screen and (min-width:${Size.MediaScreen.Small}px) and ( max-width:${Size.MediaScreen.Medium}px) {
        max-height: 400px;
    }
    @media screen and (min-width:${Size.MediaScreen.Large}px) {
        max-height: 720px;
    }
`;

export const PostCardWrapper = (props) => {

    const getPostDetail = (id) => {
        props.onClickCard(id);
    }

    let postSectionArray = [];

    if (props.post_array.length !== 0){
        for (let i = 0; i < props.post_array.length; i ++){
            postSectionArray.push(
                <a onClick={() => getPostDetail(i)}>
                    <PostCard dangerouslySetInnerHTML={{__html: props.post_array[i]['title'] }} key={props.post_array[i]['id']} />
                </a>
            );
        }
    }

    return (
        <StyledPostCardWrapper>
            { postSectionArray }
        </StyledPostCardWrapper>
    )
}