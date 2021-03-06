import React from 'react'
import { useSelector } from 'react-redux';
import { PostCardWrapper } from '../molecules/Card/PostCardWrapper';
import BaseSection from '../organisms/Section/BaseSection';

const Home = () => {

    const selector = useSelector((state) => state);

    return (
        <BaseSection>
            <PostCardWrapper post_array={selector.posts.post_array} />
        </BaseSection>
    );
}

export default Home