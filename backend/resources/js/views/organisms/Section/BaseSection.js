import styled from "styled-components";
import Size from "../../styles/size";

const BaseSection = styled.section`
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    @media screen and (max-width:${Size.MediaScreen.Small}px) {
        max-width: 32rem;
    }
    @media screen and (min-width:${Size.MediaScreen.Small}px) and ( max-width:${Size.MediaScreen.Medium}px) {
        max-width: 64rem;
    }
    @media screen and (min-width:${Size.MediaScreen.Large}px) {
        max-width: 96rem;
    }
`;
export default BaseSection;