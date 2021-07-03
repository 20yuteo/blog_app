import styled from 'styled-components';
import Color from '../../styles/color';
import Size from '../../styles/size';

const BaseButton = styled.button`
    background-color: ${ Color.Button };
    color: ${ Color.Form.Color };
    border-color: ${ Color.Button };
    display: inline-block;
    border-radius: ${Size.BorderRadius}px;
    padding: ${Size.Button.PaddingTop}rem ${Size.Button.PaddingLeft}rem;
    opacity: ${Size.Button.Opacity};
    font-size: ${Size.FontSize.Medium}rem;
    font-weight: ${Size.Button.FontWeight};
    cursor: pointer;
`;
export default BaseButton;