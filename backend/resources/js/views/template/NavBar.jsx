import React from 'react';
import Links from '../molecules/Links';
import BaseLink from '../atoms/Links/BaseLink';
import { LinkWrapper } from '../molecules/LinkWrapper';
import BaseButton from '../atoms/buttons/BaseButton';
import Color from '../styles/color';

const NavBar = () => {

    return (
        <Links>
            <LinkWrapper>
                <BaseLink to={ '/' } backgroundColor={ Color.Background } borderColor={ Color.Stroke } Name={'Home'}/>
            </LinkWrapper>
            <LinkWrapper>
                <BaseLink to={ '/about' } backgroundColor={ Color.Secondary } borderColor={ Color.Stroke }  Name={'About'} />
            </LinkWrapper>
            <LinkWrapper>
                <BaseLink to={ '/login' } backgroundColor={ Color.Tertiary } borderColor={ Color.Stroke } Name={'Login'} />
            </LinkWrapper>
            <LinkWrapper>
                <BaseButton type="button" minWidth={8} minHeight={2} paddingTop={1.2} paddingLeft={3}>Logout</BaseButton>
            </LinkWrapper>
        </Links>
    );
}

export default NavBar;