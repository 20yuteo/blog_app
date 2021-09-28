import React from 'react'
import { useSelector } from "react-redux";
import NameTag from '../atoms/Profile/NameTag';
import BaseSection from '../organisms/Section/BaseSection';
import NewPostLink from '../atoms/Links/NewPostLink';
import { PostCardWrapper } from '../molecules/Card/PostCardWrapper';
import ModalProfileImage from '../atoms/Image/ModalProfileImage';
import PostsSection from '../molecules/MyPage/PostsSection';
import ProfileSection from '../molecules/MyPage/ProfileSection';
import Section from '../organisms/MyPage/Section';
import NewLinkWrapper from '../molecules/Link/NewLinkWrapper';

const MyPage = () => {

    const selector = useSelector((state) => state);

    return (
        <BaseSection>
            <Section>
                <PostsSection>
                    <NewLinkWrapper>
                        <NewPostLink to="/post/create">New Post</NewPostLink>
                    </NewLinkWrapper>
                    <PostCardWrapper post_array={ selector.posts.post_array } />
                </PostsSection>
                <ProfileSection>
                    <ModalProfileImage src={selector.users.image_url} />
                    <NameTag>{ selector.users.name }</NameTag>
                    <NewLinkWrapper>
                        <NewPostLink to="/user/edit">Edit Profile</NewPostLink>
                    </NewLinkWrapper>
                </ProfileSection>
            </Section>
        </BaseSection>
    );
}

export default MyPage