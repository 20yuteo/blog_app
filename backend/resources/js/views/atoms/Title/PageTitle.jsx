import styled from "styled-components";
import Size from "../../styles/size";
import Color from "../../styles/color";

const PageTitle = styled.h1`
    color: ${ Color.Headline };
    font-weight: ${ Size.FontWeight };
    padding: 3rem;
    text-align: left;
`;

export default PageTitle;