import Size from "../../styles/size";
import Color from "../../styles/color";
import styled from "styled-components";

const Title = styled.h2`
    color: ${ Color.Headline };
    font-weight: ${ Size.FontWeight };
    border-bottom: 8px solid ${ Color.Headline };
    padding: 24px;
    margin: 16px;
`;
export default Title;