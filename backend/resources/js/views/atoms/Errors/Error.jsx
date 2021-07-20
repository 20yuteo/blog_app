import styled from "styled-components";
import Color from "../../styles/color";

const StyledError = styled.span`
    color: ${Color.Tertiary};
`;

const Error = (props) => {
    return (
        <StyledError>
            { props.checkElement?.type === "required" ?  props.checkElement?.message : '' }
            { props.checkElement?.type === "pattern" ?  props.checkElement?.message : '' }
        </StyledError>
    )
}
export default Error;