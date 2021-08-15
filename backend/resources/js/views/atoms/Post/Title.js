import Size from "../../styles/size";
import Color from "../../styles/color";
import styled from "styled-components";

const Title = styled.div`
    color: ${ Color.Headline };
    font-size: ${ Size.FontSize.Large }rem;
    font-weight: ${ Size.FontWeight };
    border-bottom: 8px solid ${ Color.Headline };
    padding: 24px;
    margin: 16px;
`;
export default Title;