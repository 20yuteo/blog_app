import styled from "styled-components";
import Color from "../../styles/color";
import Size from "../../styles/size";
import { Link } from "react-router-dom";

const NewPostLink = styled(Link)`
    background-color: ${ Color.Tertiary };
    color: ${Color.ButtonText};
    font-size: ${Size.FontSize.Medium}rem;
    font-weight: ${Size.Form.FontWeight};
    display: inline-block;
    padding: 2rem 0 2rem;
    min-height: 2rem;
    width: 80%;
    margin: 10%;
    text-decoration: none;
    text-align: center;
`;
export default NewPostLink;