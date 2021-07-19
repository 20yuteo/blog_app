import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Color from '../../styles/color';
import Size from '../../styles/size';

const StyledLink = styled(({ backgroundColor, Name, ...props }) => <Link {...props} />)`
    ${(p = props) =>
        css`
        background-color: ${p.backgroundColor ? p.backgroundColor : ''};
        `}
    display: inline-block;
    color: ${Color.ButtonText};
    font-size: ${Size.FontSize.Medium}rem;
    font-weight: ${Size.Form.FontWeight};
    min-width: 8rem;
    min-height: 2rem;
    text-decoration: none;
    padding: ${ Size.Button.PaddingTop }rem ${ Size.Button.PaddingLeft }rem ;
    text-align: center;
`;

const BaseLink = (props) => {
    return (
        <StyledLink to={props.to} backgroundColor={props.backgroundColor} >{props.Name}</StyledLink>
    )
}
export default BaseLink;