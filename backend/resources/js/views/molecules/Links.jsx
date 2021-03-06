import styled from "styled-components";
import Color from "../styles/color";
import Size from "../styles/size";

const Links = styled.div`
    display: flex;
    border: 8px solid ${Color.Stroke};
    background: ${ Color.Stroke };
    @media screen and (min-width:${Size.MediaScreen.Small}px) {
        flex-flow: column;
        border-right: 8px solid ${Color.Stroke};
        width: 16rem;
        height: 100%;
    }
`;

export default Links;