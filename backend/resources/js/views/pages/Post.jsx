import PageTitle from "../atoms/Title/PageTitle"
import BaseSection from "../organisms/Section/BaseSection";
import NewPostLink from "../atoms/Links/NewPostLink";

const Post = () => {
    return (
        <>
            <PageTitle>
                Post
            </PageTitle>
            <BaseSection>
                <NewPostLink >New Post</NewPostLink>
            </BaseSection>
        </>
    )
}
export default Post;