import styled from 'styled-components';
import Color from '../../styles/color';
import Size from '../../styles/size';

const BaseButton = styled.button`
    background-color: ${ Color.Button };
    color: ${ Color.ButtonText };
    border-color: ${ Color.Button };
    display: inline-block;
    border-radius: ${Size.Button.BorderRadius}px;
    padding: ${Size.Button.PaddingTop} rem ${Size.Button.PaddingLeft} rem;
    opacity: ${Size.Button.Opacity};
    font-size: ${Size.Button.FontSize}rem;
    font-weight: ${Size.Button.FontWeight};
    font-family: proxima-nova, sans-serif;
    cursor: pointer;
`;
export default BaseButton;