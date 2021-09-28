import styled from "styled-components";
import Color from "../../styles/color";
import Size from "../../styles/size";

const TagListWrapper = styled.ul`
    display: flex;
    color: ${ Color.Headline };
    font-size: ${ Size.FontSize.Large }rem;
    font-weight: ${ Size.FontWeight };
    padding: 32px;
    flex-wrap: wrap;
`;
export default TagListWrapper;