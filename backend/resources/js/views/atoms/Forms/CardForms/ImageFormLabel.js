import styled from "styled-components";
import BaseFormLabel from "../BaseFormLabel";
import Color from "../../../styles/color";

export const ImageFormLabel = styled(BaseFormLabel)`
    color: ${ Color.Card.Form.Border };
    background-color: ${ Color.Card.Background };
    padding: 10px;
    border: dashed 4px ${ Color.Card.Form.Border };
    margin: 5px;
    max-width: 16rem;
    text-align: center;
    cursor: pointer;
`;