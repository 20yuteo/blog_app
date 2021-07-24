import styled from "styled-components";
import Color from "../../styles/color";
import Size from "../../styles/size";

export const BaseHeader = styled.header`
    display: flex;
    padding-top: 3rem;
    justify-content: space-around;
    font-size: ${ Size.FontSize.Medium }rem;
    color: ${ Color.Headline };
    font-weight: ${ Size.FontWeight };

`;