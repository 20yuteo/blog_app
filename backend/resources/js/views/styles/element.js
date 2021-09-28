import styled from "styled-components";
import Size from "./size";

export const Main = styled.main`
    display: flex;
    height: 100%;
    overflow: auto;
    @media screen and (max-width:${Size.MediaScreen.Small}px) {
        flex-direction: column-reverse;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-flow: column;
    flex-grow: 1;
    overflow: auto;
`;

export const Nav = styled.nav`
    flex: 1;
    margin: 32px;
`;