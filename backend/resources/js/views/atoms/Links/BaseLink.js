import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Color from '../../styles/color';
import Size from '../../styles/size';

const StyledLink = styled(Link)`
    display: inline-block;
    background-color: ${props => props.backgroundColor};
    color: ${Color.ButtonText};
    font-size: ${Size.FontSize.Medium}rem;
    font-weight: ${Size.Form.FontWeight};
    min-width: 8rem;
    min-height: 2rem;
    text-decoration: none;
    padding: ${ Size.Button.PaddingTop }rem ${ Size.Button.PaddingLeft }rem ;
    text-align: center;
`;

const LayoutLink = styled.div`
    margin: 2rem 2rem;
`;

const BaseLink = (props) => {
    return (
        <LayoutLink>
            <StyledLink to={props.to} backgroundColor={props.backgroundColor} borderColor={props.borderColor}>{props.Name}</StyledLink>
        </LayoutLink>
    )
}
export default BaseLink;