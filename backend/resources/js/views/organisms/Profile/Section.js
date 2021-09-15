import styled from "styled-components";
import Size from "../../styles/size";

const Section = styled.section`
    display: flex;
    justify-content: space-around;
    padding: 16px;
    text-align: center;
    @media screen and (max-width:${Size.MediaScreen.Small}px) {
        flex-direction: column;
    }
    @media screen and (min-width:${Size.MediaScreen.Small}px) and ( max-width:${Size.MediaScreen.Medium}px) {
        flex-direction: column;
    }
`;
export default Section;