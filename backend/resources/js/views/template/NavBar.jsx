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

    const selector = useSelector((state) => state);

    let authComponent;

    if (selector.users.isSignedIn){
        authComponent = <>
                            <LinkWrapper>
                                <BaseLink to={ '/post' } backgroundColor={ Color.Tertiary } borderColor={ Color.Stroke }  Name={'Post'} />
                            </LinkWrapper>
                            <LinkWrapper>
                                <BaseLink to={ '/my_page' } backgroundColor={ Color.Secondary } borderColor={ Color.Stroke }  Name={'MyPage'} />
                            </LinkWrapper>
                            <LinkWrapper>
                                <BaseButton type="button" minWidth={8} minHeight={2} paddingTop={1.2} paddingLeft={3} onClick={() => dispatch(signOut())}>Logout</BaseButton>
                            </LinkWrapper>
                        </>
    } else {
        authComponent = <LinkWrapper>
                            <BaseLink to={ '/login' } backgroundColor={ Color.Tertiary } borderColor={ Color.Stroke } Name={'Login'} />
                        </LinkWrapper>
    }

    return (
        <Links>
            <LinkWrapper>
                <BaseLink to={ '/' } backgroundColor={ Color.Background } borderColor={ Color.Stroke } Name={'Home'}/>
            </LinkWrapper>
            <LinkWrapper>
                <BaseLink to={ '/about' } backgroundColor={ Color.Secondary } borderColor={ Color.Stroke }  Name={'About'} />
            </LinkWrapper>
                { authComponent }
        </Links>
    );
}

export default NavBar;