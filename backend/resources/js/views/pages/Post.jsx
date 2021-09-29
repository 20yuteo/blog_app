import BaseSection from "../organisms/Section/BaseSection";
import NewPostLink from "../atoms/Links/NewPostLink";
import { useSelector } from "react-redux";
import { PostCardWrapper } from "../molecules/Card/PostCardWrapper";
import NewLinkWrapper from "../molecules/Link/NewLinkWrapper";

const Post = () => {

    const selector = useSelector((state) => state);

    return (
        <>
            <BaseSection>
                <NewLinkWrapper>
                    <NewPostLink to='/post/create'>New Post</NewPostLink>
                </NewLinkWrapper>
            </BaseSection>
            <PostCardWrapper post_array={selector.posts.post_array} />
        </>
    )
}
export default Post;