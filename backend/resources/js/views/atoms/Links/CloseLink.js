import styled from "styled-components";
import Color from "../../styles/color";
import Size from "../../styles/size";

const CloseLink = styled.a`
color: ${ Color.Card.Headline };
font-size: ${ Size.FontSize.Large }rem;
font-weight: ${ Size.FontWeight };
text-decoration: none;
`;
export default CloseLink;