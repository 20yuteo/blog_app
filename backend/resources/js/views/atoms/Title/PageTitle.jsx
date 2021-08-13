import styled from "styled-components";
import Size from "../../styles/size";
import Color from "../../styles/color";

const PageTitle = styled.div`
    color: ${ Color.Headline };
    font-size: ${ Size.FontSize.Large }rem;
    font-weight: ${ Size.FontWeight };
    padding: 3rem;
    text-align: left;
`;

export default PageTitle;