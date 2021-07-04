import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Size from '../styles/size';

const NavBar = () => {

    const Links = styled.div`
        display: flex;
        width: 8rem;
        @media screen and (min-width:${Size.MediaScreen.Small}px) {
            flex-flow: column;
        }
    `;

    return (
        <Links>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
        </Links>
    );
}

export default NavBar;