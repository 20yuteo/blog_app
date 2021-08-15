import Size from "../../styles/size";
import Color from "../../styles/color";
import styled from "styled-components";

const Content = styled.div`
    color: ${ Color.Headline };
    font-size: ${ Size.FontSize.Large }rem;
    font-weight: ${ Size.FontWeight };
    padding: 24px;
    text-align: left;
    line-height: 4rem;
`;
export default Content;