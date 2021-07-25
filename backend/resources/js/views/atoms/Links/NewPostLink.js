import styled from "styled-components";
import Color from "../../styles/color";
import Size from "../../styles/size";

const NewPostLink = styled.a`
    background-color: ${ Color.Tertiary };
    color: ${Color.ButtonText};
    font-size: ${Size.FontSize.Medium}rem;
    font-weight: ${Size.Form.FontWeight};
    display: inline-block;
    padding: 1.2rem 2rem;
    min-height: 2rem;
    width: 80%;
    text-decoration: none;
    text-align: center;
`;
export default NewPostLink;