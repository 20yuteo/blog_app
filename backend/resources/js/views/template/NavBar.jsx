import React from 'react';
import Links from '../molecules/Links';
import BaseLink from '../atoms/Links/BaseLink';
import Color from '../styles/color';

const NavBar = () => {

    return (
        <Links>
            <BaseLink to={ '/' } backgroundColor={ Color.Background } borderColor={ Color.Stroke } Name={'Home'}/>
            <BaseLink to={ '/about' } backgroundColor={ Color.Secondary } borderColor={ Color.Stroke }  Name={'About'} />
            <BaseLink to={ '/login' } backgroundColor={ Color.Tertiary } borderColor={ Color.Stroke } Name={'Login'} />
        </Links>
    );
}

export default NavBar;