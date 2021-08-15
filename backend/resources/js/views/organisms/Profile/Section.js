import styled from "styled-components";
import Color from "../../styles/color";
import Size from "../../styles/size";

const Section = styled.section`
    z-index:2;
    width: 90%;
    height: 90%;
    padding: 1em;
    background:${ Color.Card.Background };
    color: ${ Color.Card.Headline };
    font-size: ${ Size.FontSize.Medium }rem;
`;
export default Section;