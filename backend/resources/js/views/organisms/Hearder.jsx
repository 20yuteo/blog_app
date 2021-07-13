import styled from "styled-components";
import Logo from "../../../../public/images/logo.png"
import { BaseLogoImage } from "../atoms/Image/BaseLogoImage";
import { Link } from "react-router-dom";
import Color from "../styles/color";
import BaseLink from "../atoms/Links/BaseLink";
import Size from "../styles/size";

const StyledHeader = styled.header`
    display: flex;
    padding-top: 3rem;
    justify-content: space-around;
    font-size: ${ Size.FontSize.Medium }rem;
    color: ${ Color.Headline };
    font-weight: ${ Size.FontWeight };
`;

const Header = () => {
    return (
        <StyledHeader>
            <Link to={ '/' }>
                <BaseLogoImage src={ Logo } />
            </Link>
            <BaseLink backgroundColor={ Color.Background } borderColor={ Color.Stroke } Name={'My Page'}/>
        </StyledHeader>
    )
}

export default Header;