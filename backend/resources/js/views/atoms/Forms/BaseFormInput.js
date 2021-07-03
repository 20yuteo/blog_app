import styled from 'styled-components';
import Color from '../../styles/color';
import Size from '../../styles/size';

const BaseFormInput = styled.input`
    background-color: ${ Color.Form.Input };
    border-color: ${ Color.Form.Input };
    border-radius: ${ Size.BorderRadius }px;
    color: ${  Color.Form.Color };
    padding: ${ Size.Form.PaddingTop }px ${ Size.Form.PaddingLeft }px;
    width: ${ Size.Form.Width }%;
    font-size: ${ Size.FontSize.Medium }rem;
    font-weight: ${ Size.Form.FontWeight };
`;

export default BaseFormInput;