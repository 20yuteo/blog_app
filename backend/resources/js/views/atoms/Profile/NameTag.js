import styled from "styled-components";
import Color from "../../styles/color";
import Size from "../../styles/size";

const NameTag = styled.div`
    color: ${ Color.Headline };
    font-size: ${Size.FontSize.Medium}rem;
    font-weight: ${ Size.FontWeight };
    text-align: center;
    margin-top: 16px;
`;
export default NameTag;