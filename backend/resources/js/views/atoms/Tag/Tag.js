import styled from "styled-components";
import Color from "../../styles/color";

const Tag = styled.ul`
    padding: 16px;
        color: ${ props => (props.selected ? Color.Headline : Color.TextUnSelected) };
`;
export default Tag;