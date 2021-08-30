import React from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import Links from '../molecules/Links';
import BaseLink from '../atoms/Links/BaseLink';
import { LinkWrapper } from '../molecules/LinkWrapper';
import BaseButton from '../atoms/buttons/BaseButton';
import Color from '../styles/color';
import { signOut } from '../../reducks/users/operations';

const NavBar = () => {

    const dispatch = useDispatch();

    return (
        <Links>
            <LinkWrapper>
                <BaseLink to={ '/post' } backgroundColor={ Color.Tertiary } borderColor={ Color.Stroke }  Name={'Post'} />
            </LinkWrapper>
            <LinkWrapper>
                <BaseLink to={ '/my_page' } backgroundColor={ Color.Secondary } borderColor={ Color.Stroke }  Name={'MyPage'} />
            </LinkWrapper>
            <LinkWrapper>
                <BaseButton type="button" minWidth={8} minHeight={2} paddingTop={1.2} paddingLeft={3} onClick={() => dispatch(signOut())}>Logout</BaseButton>
            </LinkWrapper>
        </Links>
    );
}

export default NavBar;