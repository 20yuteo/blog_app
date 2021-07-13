import styled from 'styled-components';
import Color from '../../styles/color';
import Size from '../../styles/size';

const BaseButton = styled.button`
    background-color: ${ Color.Button };
    color: ${ Color.Form.Color };
    border-color: ${ Color.Button };
    display: inline-block;
    min-width: ${props => props.minWidth}rem;
    min-height: ${props => props.minHeight}rem;
    border-radius: ${Size.BorderRadius}px;
    padding: ${props => props.paddingTop}rem ${props => props.paddingLeft}rem;
    opacity: ${Size.Button.Opacity};
    font-size: ${Size.FontSize.Medium}rem;
    font-weight: ${Size.Button.FontWeight};
    cursor: pointer;
`;
export default BaseButton;