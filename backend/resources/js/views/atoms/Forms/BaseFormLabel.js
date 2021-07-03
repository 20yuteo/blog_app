import styled from 'styled-components';
import Color from '../../styles/color';
import Size from '../../styles/size';

const BaseFormLabel = styled.label`
    color: ${ Color.Form.Color };
    font-size: ${ Size.FontSize.Medium }rem;
    font-weight: ${ Size.Form.FontWeight };
`;
export default BaseFormLabel;