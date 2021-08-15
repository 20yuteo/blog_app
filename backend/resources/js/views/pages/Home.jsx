import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import PageTitle from '../atoms/Title/PageTitle';
import { PostCardWrapper } from '../molecules/Card/PostCardWrapper';
import BaseSection from '../organisms/Section/BaseSection';
import Title from '../atoms/Post/Title';
import Content from '../atoms/Post/Content';
import Section from '../molecules/Post/Section';

const Home = () => {

    const selector = useSelector((state) => state);

    const [isShowing, setIsShowing ] = useState(false);

    const [title, setTitle] = useState('');

    const [content, setContent] = useState('');

    const onClickCard = (postId) => {
        setIsShowing(true);
        setTitle(selector.posts.post_array[postId]['title']);
        setContent(selector.posts.post_array[postId]['content']);
    }

    return (
        <BaseSection>
            <PageTitle>
                Home
            </PageTitle>
            { isShowing ?   <Section>
                                <Title>{ title }</Title>
                                <Content dangerouslySetInnerHTML={{__html: content }} />
                            </Section> : <PostCardWrapper post_array={selector.posts.post_array} onClickCard={onClickCard} />}
        </BaseSection>
    );
}

export default Home