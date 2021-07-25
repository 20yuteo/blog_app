import styled from "styled-components";
import BaseFormLabel from "../BaseFormLabel";
import Color from "../../../styles/color";

const FormLabel = styled(BaseFormLabel)`
    color: ${ Color.Form.Input };
    background-color: ${ Color.Card.Background };
`;
export default FormLabel;