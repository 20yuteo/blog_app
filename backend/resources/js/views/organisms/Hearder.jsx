import styled from "styled-components";
import Color from "../styles/color";
import BaseLink from "../atoms/Links/BaseLink";
import Size from "../styles/size";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    font-size: ${ Size.FontSize.Medium }rem;
    color: ${ Color.Headline };
    font-weight: ${ Size.FontWeight };
`;

const Header = () => {
    return (
        <StyledHeader>
            <BaseLink to={ '/' } backgroundColor={ Color.Background } borderColor={ Color.Stroke } Name={'Blog App'}/>
            <BaseLink backgroundColor={ Color.Background } borderColor={ Color.Stroke } Name={'My Page'}/>
        </StyledHeader>
    )
}

export default Header;